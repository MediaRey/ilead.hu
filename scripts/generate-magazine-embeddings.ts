import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const informationBlocks = [
  {
    text: "Az MIT Sloan Management Review egy nemzetközileg elismert üzleti és menedzsment magazin, amely a vezetés, stratégia, innováció és technológia üzleti hatásaira fókuszál."
  },
  {
    text: "A magazin olyan kulcstémákkal foglalkozik, mint a vezetői döntéshozatal, digitális átalakulás, mesterséges intelligencia, innováció és fenntartható növekedés, kutatásalapú, mégis gyakorlatias formában."
  },
  {
    text: "A magazin negyedévente jelenik meg nyomtatott formában."
  },
  {
    text: "A magazin elsősorban vállalatvezetőknek, menedzsereknek, döntéshozóknak, vállalkozóknak és stratégiai gondolkodóknak szól, akik hosszú távú üzleti előnyre törekednek."
  },
  {
    text: "Az előfizetés évente 4 nyomtatott lapszámot tartalmaz, tele elemzésekkel, esettanulmányokkal és vezetői insightokkal."
  },
  {
    text: "Az éves előfizetés ára 18 800 HUF, amely a teljes éves (4 lapszámos) kiadást tartalmazza."
  },
  {
    text: "Jelenleg a magazin nyomtatott formában érhető el, a digitális verzió bevezetése későbbi fázisban várható."
  },
  {
    text: "Érdemes előfizetni a magazinra, mert segít jobban megérteni a globális üzleti trendeket, és konkrét gondolkodási kereteket ad a vezetői döntésekhez."
  },
  {
    text: "A magazin valós vállalati példákon és kutatásokon alapuló esettanulmányokat mutat be."
  },
  {
    text: "A magazin abban különbözik más üzleti magazinoktól, hogy nem híreket, hanem mély összefüggéseket kínál, és szoros együttműködésben készül a világszerte elismert MIT Sloan Management Review szerkesztőségi és kiadói csapatával."
  },
  {
    text: "A tartalom nemzetközi perspektívájú, de kifejezetten releváns közép-európai vezetők számára is."
  },
  {
    text: "A magazin kezdő vezetőknek is ajánlott, különösen azoknak, akik strukturáltabb stratégiai gondolkodást szeretnének kialakítani."
  },
  {
    text: "Az előfizetés az iLead Institute hivatalos csatornáin keresztül érhető el."
  },
  {
    text: "Az iLead Institute a közép-európai régióért felel, beleértve Magyarországot is, és támogatja a magazin elérhetőségét és terjesztését a régióban."
  },
  {
    text: "Jelenleg nem áll rendelkezésre kizárólag digitális előfizetés, azonban ez a lehetőség a jövőben felmerülhet."
  }
];

async function generateEmbeddings() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.error('❌ Error: GEMINI_API_KEY not set in .env.local');
    console.log('\nPlease:');
    console.log('1. Get your API key from https://ai.google.dev/');
    console.log('2. Add it to .env.local file: GEMINI_API_KEY=your_actual_key');
    process.exit(1);
  }

  console.log('🚀 Starting magazine information block embeddings generation...');
  console.log(`📊 Processing ${informationBlocks.length} information blocks\n`);

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });

  const embeddingsData = [];

  for (let i = 0; i < informationBlocks.length; i++) {
    const block = informationBlocks[i];
    const text = block.text;

    try {
      console.log(`⏳ [${i + 1}/${informationBlocks.length}] Generating embedding for information block ${i + 1}...`);

      const result = await model.embedContent(text);

      embeddingsData.push({
        text: text,
        embedding: result.embedding.values
      });

      console.log(`✅ [${i + 1}/${informationBlocks.length}] Complete\n`);

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Error generating embedding for block ${i + 1}:`, error);
      throw error;
    }
  }

  const outputPath = path.join(process.cwd(), 'data', 'magazine-embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(embeddingsData, null, 2));

  console.log(`\n✨ Success! Generated ${embeddingsData.length} embeddings`);
  console.log(`📁 Saved to: ${outputPath}`);
  console.log(`📦 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);
}

generateEmbeddings().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
