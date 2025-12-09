import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import faqEmbeddings from '@/data/faq-embeddings.json';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Simple cosine similarity function
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

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Az üzenet kötelező' },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_api_key_here') {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json(
        { error: 'A szerver nincs megfelelően konfigurálva. Kérjük, lépjen kapcsolatba az adminisztrátorral.' },
        { status: 500 }
      );
    }

    // 1. Generate embedding for user question
    const embeddingModel = genAI.getGenerativeModel({
      model: 'text-embedding-004'
    });

    const queryEmbedding = await embeddingModel.embedContent(message);

    // 2. Find most similar FAQs (top 3)
    const similarities = faqEmbeddings.map((faq: any) => ({
      question: faq.question,
      answer: faq.answer,
      similarity: cosineSimilarity(
        queryEmbedding.embedding.values,
        faq.embedding
      )
    }));

    const topResults = similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3);

    // 3. Build context from retrieved FAQs
    const context = topResults
      .map((r) => `Kérdés: ${r.question}\nVálasz: ${r.answer}`)
      .join('\n\n');

    // 4. Generate response using Gemini with context
    const chatModel = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash'
    });

    const prompt = `Az iLead Institute AI asszisztense vagy, aki segít válaszolni a "(be) Future Ready Executive" programmal kapcsolatos kérdésekre. Válaszolj magyarul, professzionálisan és barátságosan.

Kontextus a GYIK-ből (relevancia szerint rendezve):
${context}

Felhasználó kérdése: ${message}

UTASÍTÁSOK:
1. Ha megtalálod a választ a fenti kontextusban, válaszolj ezen információk alapján
2. A válasznak rövidnek (2-4 mondat) de hasznosnak kell lennie
3. Ha az információ nincs a kontextusban, mondd: "Ezt az információt nem találom a GYIK-ben. Részletesebb információkért ajánlom, hogy lépjen kapcsolatba az info@ilead.cz címmel vagy töltse ki a kapcsolatfelvételi űrlapot weboldalunkon."
4. Ne válaszolj olyan kérdésekre, amelyek nem kapcsolódnak az iLead Institute-hoz vagy a Future Ready Executive programhoz
5. Őrizd meg a professzionális és barátságos hangnemet

Válasz:`;

    const result = await chatModel.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({
      response,
      sources: topResults.slice(0, 2).map(r => r.question)
    });

  } catch (error: any) {
    console.error('Chat API error:', error);

    // Handle specific error types
    if (error?.status === 429) {
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
    message: isConfigured
      ? 'Chat API is ready'
      : 'GEMINI_API_KEY not configured'
  });
}
