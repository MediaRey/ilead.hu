import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import faqEmbeddings from '@/data/faq-embeddings.json';

// Type definitions
interface EmbeddingItem {
  text: string;
  embedding: number[];
}

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Cosine similarity function
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (magnitudeA * magnitudeB);
}

// Keyword matching with Hungarian synonyms and related terms
const KEYWORD_MAPPINGS: Record<string, string[]> = {
  // Duration related
  'időtartam': ['időtartam', 'időtartama', 'tart', 'hónap', 'hosszú', 'meddig', 'mennyi ideig', 'hossza'],
  'meddig': ['időtartam', 'időtartama', 'tart', 'hónap', 'hosszú', 'meddig', 'mennyi ideig'],

  // Price related
  'ár': ['ár', 'ára', 'költség', 'fizet', 'mennyibe', 'kerül', 'díj', 'czk'],
  'mennyibe': ['ár', 'ára', 'költség', 'fizet', 'mennyibe', 'kerül', 'díj', 'czk'],

  // Location related
  'hol': ['prága', 'prágában', 'helyszín', 'személyesen', 'online', 'hol'],
  'helyszín': ['prága', 'prágában', 'helyszín', 'személyesen', 'online'],

  // Start date related
  'mikor': ['mikor', 'kezd', 'április', '2026', 'indulás', 'kezdődik', 'indul'],
  'kezd': ['mikor', 'kezd', 'április', '2026', 'indulás', 'kezdődik', 'indul', 'kezdete'],

  // Language related
  'nyelv': ['nyelv', 'csehül', 'angol', 'magyarul', 'nyelven', 'fordít'],

  // Certificate related
  'tanúsítvány': ['tanúsítvány', 'oklevél', 'bizonyítvány', 'igazolás', 'certifikát'],
  'oklevél': ['tanúsítvány', 'oklevél', 'bizonyítvány', 'igazolás', 'certifikát'],

  // Content/topics related
  'téma': ['téma', 'blokk', 'modul', 'tartalom', 'tananyag', 'tematikus'],
  'mit': ['téma', 'blokk', 'tartalom', 'tanul', 'tanít'],

  // Target audience
  'kinek': ['vezető', 'vezetők', 'kinek', 'számára', 'célcsoport', 'ajánlott'],
  'ki': ['vezető', 'vezetők', 'kinek', 'számára', 'részt', 'vehet'],

  // Requirements
  'követelmény': ['követelmény', 'feltétel', 'szükség', 'kell', 'vizsga', 'mba'],
  'feltétel': ['követelmény', 'feltétel', 'szükség', 'kell'],

  // Format
  'hogyan': ['workshop', 'prezentáció', 'gyakorlat', 'szimuláció', 'interaktív'],
  'formátum': ['workshop', 'prezentáció', 'gyakorlat', 'online', 'személyesen'],

  // Contact
  'kapcsolat': ['kapcsolat', 'email', 'telefon', 'érdeklődni', 'info'],
  'jelentkez': ['jelentkez', 'regisztrál', 'kapcsolat', 'email'],
};

// Calculate keyword match score
function calculateKeywordScore(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  let score = 0;
  const matchedTerms = new Set<string>();

  // Check each keyword mapping
  for (const [trigger, relatedTerms] of Object.entries(KEYWORD_MAPPINGS)) {
    // If query contains trigger word
    if (queryLower.includes(trigger)) {
      // Check if text contains any related terms
      for (const term of relatedTerms) {
        if (textLower.includes(term) && !matchedTerms.has(term)) {
          score += 0.15; // Boost for each matched related term
          matchedTerms.add(term);
        }
      }
    }
  }

  // Direct word overlap bonus
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
  for (const word of queryWords) {
    if (textLower.includes(word)) {
      score += 0.05;
    }
  }

  // Cap the keyword score
  return Math.min(score, 0.5);
}

// Configuration
const CONFIG = {
  SIMILARITY_THRESHOLD: 0.40,
  TOP_K_RESULTS: 6,
  MIN_RESULTS: 2,
  SEMANTIC_WEIGHT: 0.6,        // Weight for embedding similarity
  KEYWORD_WEIGHT: 0.4,         // Weight for keyword matching
  DEBUG: process.env.NODE_ENV === 'development'
};

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
          { error: 'Az üzenet kötelező' },
          { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_api_key_here') {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json(
          { error: 'A szerver nincs megfelelően konfigurálva. Kérjük, lépjen kapcsolatba az adminisztrátorral.' },
          { status: 500 }
      );
    }

    // 1. Generate embedding for user's question
    const embeddingModel = genAI.getGenerativeModel({
      model: 'text-embedding-004'
    });

    const queryEmbedding = await embeddingModel.embedContent(message);

    // 2. Calculate hybrid scores (semantic + keyword)
    const scoredResults = faqEmbeddings.map((item: EmbeddingItem, index: number) => {
      const semanticScore = cosineSimilarity(
          queryEmbedding.embedding.values,
          item.embedding
      );
      const keywordScore = calculateKeywordScore(message, item.text);

      // Hybrid score: weighted combination
      const hybridScore = (semanticScore * CONFIG.SEMANTIC_WEIGHT) +
          (keywordScore * CONFIG.KEYWORD_WEIGHT);

      return {
        text: item.text,
        semanticScore,
        keywordScore,
        hybridScore,
        index
      };
    });

    // Sort by hybrid score
    const sortedResults = scoredResults.sort((a, b) => b.hybridScore - a.hybridScore);

    // Filter and limit results
    let topResults = sortedResults.filter(r => r.hybridScore >= CONFIG.SIMILARITY_THRESHOLD);

    if (topResults.length < CONFIG.MIN_RESULTS) {
      topResults = sortedResults.slice(0, CONFIG.MIN_RESULTS);
    }

    topResults = topResults.slice(0, CONFIG.TOP_K_RESULTS);

    // Debug logging
    if (CONFIG.DEBUG) {
      console.log('\n--- RAG Debug (Hybrid Search) ---');
      console.log('Question:', message);
      console.log('Top matches:');
      topResults.forEach((r, i) => {
        console.log(`  ${i + 1}. [hybrid: ${r.hybridScore.toFixed(3)} | semantic: ${r.semanticScore.toFixed(3)} | keyword: ${r.keywordScore.toFixed(3)}]`);
        console.log(`     ${r.text.substring(0, 80)}...`);
      });
      console.log('---------------------------------\n');
    }

    // 3. Build structured context
    const contextBlocks = topResults
        .map((r, i) => `[${i + 1}] ${r.text}`)
        .join('\n\n');

    // 4. Generate response with improved prompt
    const chatModel = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash-lite'
    });

    const systemPrompt = `Te az iLead Institute AI asszisztense vagy. A Be Future Ready Executive programról adsz információkat.

SZEREPED:
- Barátságos, professzionális asszisztens
- Pontos, tömör válaszokat adsz
- Magyarul válaszolsz

TUDÁSBÁZIS:
${contextBlocks}

SZABÁLYOK:
1. CSAK a fenti tudásbázis alapján válaszolj
2. Ha a kérdésre nincs információ a tudásbázisban, mondd: "Sajnos erre a kérdésre nem találok információt. Kérem, lépjen kapcsolatba velünk az info@ilead.cz címen vagy hagyja el elérhetőségét."
3. Válaszolj közvetlenül, ne hivatkozz a "tudásbázisra" vagy "információkra"
4. Legyél tömör: 1-4 mondat elegendő
5. Ha több releváns információ is van, foglald össze őket logikusan

KÉRDÉS: ${message}

VÁLASZ:`;

    const result = await chatModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: systemPrompt }] }],
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 500,
      }
    });

    const response = result.response.text();

    return NextResponse.json({
      response,
      ...(CONFIG.DEBUG && {
        debug: {
          topMatches: topResults.map(r => ({
            hybridScore: r.hybridScore.toFixed(3),
            semanticScore: r.semanticScore.toFixed(3),
            keywordScore: r.keywordScore.toFixed(3),
            preview: r.text.substring(0, 60) + '...'
          }))
        }
      })
    });

  } catch (error: unknown) {
    console.error('Chat API error:', error);

    if (error && typeof error === 'object' && 'status' in error && error.status === 429) {
      return NextResponse.json(
          { error: 'Túl sok kérés. Kérjük, próbálja meg egy kis idő múlva.' },
          { status: 429 }
      );
    }

    return NextResponse.json(
        { error: 'Elnézést, hiba történt. Kérjük, próbálja újra.' },
        { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  const isConfigured = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_api_key_here';

  return NextResponse.json({
    status: 'ok',
    configured: isConfigured,
    embeddingsLoaded: faqEmbeddings.length,
    searchType: 'hybrid (semantic + keyword)',
    message: isConfigured
        ? `Chat API ready with ${faqEmbeddings.length} knowledge blocks`
        : 'GEMINI_API_KEY not configured'
  });
}
