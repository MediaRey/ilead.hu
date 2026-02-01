import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

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
  },
  {
    text: "A magazin magyar nyelven jelenik meg, kifejezetten a magyar és közép-európai üzleti közönség számára."
  },
  {
    text: "A magazint megvásárolhatja, megrendelheti vagy előfizethet rá az oldalon lentebb található űrlap kitöltésével."
  }
];

const KNOWLEDGE_BASE = informationBlocks.map(block => block.text).join('\n\n');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    });

    const systemPrompt = `
      TEVÉKENYSÉG: Te az iLead Institute profi AI tanácsadója vagy.
      KONTEXTUS: Az MIT Sloan Management Review (magyar kiadás) magazinról adsz felvilágosítást.
      
      ADATOK:
      ---
      ${KNOWLEDGE_BASE}
      ---

      SZIGORÚ SZABÁLYOK:
      1. CSAK a fenti adatok alapján válaszolj.
      2. HA A KÉRDÉSRE NINCS PONTOS VÁLASZ az adatokban, vagy nem vagy biztos benne, AKKOR KIZÁRÓLAG az alábbi szöveget válaszold, semmi mást:
         "Sajnos erre a kérdésre nem találok információt. Kérem, töltse ki a weboldalon alább található űrlapot, vagy írjon nekünk az mark.kurbucz@forbes.hu e-mail címre."
      3. Ne próbálj meg válaszokat kitalálni.
      4. Stílus: Üzleti, professzionális, segítőkész.
      5. Nyelv: Magyar.
      6. Formátum: Használj Markdown-t (félkövér szöveg a hangsúlyokhoz, listák a pontokhoz).

      FELHASZNÁLÓ KÉRDÉSE: "${message}"
      
      VÁLASZ:
    `;

    const result = await model.generateContent(systemPrompt);
    const response = result.response.text();

    return NextResponse.json({ response });

  } catch (error) {
    console.error('Magazine Chat API error:', error);
    return NextResponse.json(
        { error: 'Szerverhiba történt. Kérjük, próbálja újra.' },
        { status: 500 }
    );
  }
}
