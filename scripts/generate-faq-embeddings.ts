import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const informationBlocks = [
  {
    text: "A Future Ready Executive program időtartama 10 hónap, amelyet egy ünnepélyes megnyitó és inspiráló találkozó előz meg onboarding-gal. A program befejezését követően ünnepélyes záró rendezvényre kerül sor az iLead Institute kezdeményezéséhez kapcsolódó oktatók, szakértők és résztvevők jelenlétében. A program lezárása után networking találkozókat és kiegészítő eseményeket is tervezünk."
  },
  {
    text: "Az onboarding szekció kivételes lehetőség a csapat megismerésére, a program részletes bemutatására és értékes üzleti kapcsolatok kialakítására egy speciális networking során. A találkozó kizárólag a modern leadership eszméje köré tömörült résztvevők, oktatók és szakértők számára szól. A hivatalos rész mellett egyedülálló networking eseményt is tervezünk."
  },
  {
    text: "A programban a találkozók havonta egyszer zajlanak kétnapos képzési blokkok formájában."
  },
  {
    text: "A Future Ready Executive program 25 éves európai piaci tapasztalatra épül, amelyet az MIT által ajánlott témák inspiráltak. A workshopok gyakorlati eseteket, aktuális trendeket és a legjobb egyetemek által használt eszközöket tartalmaznak. A helyi és globális nézőpontot úgy kapcsoljuk össze, hogy vezető cseh és szlovák szakértők szerepelnek oktatóként és trénerként. Ez egy egyedülálló program, ahol találkozhat a cseh és szlovák üzleti élet és az akadémiai világ élvonalával. Az akadémiai tudást globális trendekkel és helyi megoldásokkal kombináljuk. Egyetlen konferencia vagy fejlesztési program sem kínál ilyen széles kapcsolatrendszert és vezetési szemléletet."
  },
  {
    text: "A program megkezdését 2026 áprilisára tervezzük, kezdve az onboarding találkozóval."
  },
  {
    text: "A program 10 kétnapos tematikus blokkot tartalmaz: Győztes stratégiák új modell a gyors és turbulens világban eszközökkel és kulcselemekkel, Mesterséges intelligencia a stratégiai vezetésben, A stratégia operacionalizálása és megvalósítása, Jövőre felkészült vezetés szervezeti és egyéni dimenzióval, A vezetők embereket építenek hogyan vezessünk fejlesszünk és inspiráljunk tehetségeket, Ügyfélközpontú szervezet építése hogyan irányítsuk a profitot az ügyfél megértésén keresztül, Gazdaságtan vezetők számára értékteremtés eszközkezelés és befektetési döntéshozatal, A győztes szervezet kultúra elkötelezettség és változáskezelés, Mesterség az árképzésben és költségekben hogyan növeljük a bevételt és csökkentsük egyszerre a kiadásokat, A vezető mint kommunikátor és tárgyaló a párbeszéd befolyás és értékteremtés mestere."
  },
  {
    text: "Minden találkozó személyesen zajlik Prágában. Az egyes blokkok között ezen felül online kapcsolattartás is lehetséges az oktatókkal és az iLead Institute szakértői csapatával."
  },
  {
    text: "A programban való részvétel ára tartalmazza a részvételt 10 kétnapos helyszíni képzési blokkon Prágában kávészünetekkel és nyomtatott anyagokkal, részvételt 2 speciális találkozón az onboarding formális és informális résszel gálavacsorával valamint a program ünnepélyes zárása, egyéves előfizetést a nyomtatott MIT Sloan Review és Forbes Česko magazinokra, egyéves online hozzáférést a Forbes.cz és MIT Sloan anyagaihoz és cikkeihez, valamint meghívókat a Forbes és az iLead Institute által szervezett kiválasztott eseményekre."
  },
  {
    text: "A program elvégzése után az ünnepélyes ceremónia során a résztvevők megkapják az iLead Institute által kiállított tanúsítványt."
  },
  {
    text: "A program ára 230 000 CZK, a fizetés számla alapján történik."
  },
  {
    text: "A képzést tapasztalt oktatók és gyakorlati üzleti vezetők vezetik, minden találkozó csehül zajlik. Minden blokk tartalmaz egy inspiráló előadást egy tapasztalt vezetőtől, valamint workshopokat, amelyeket élvonalbeli cseh és szlovák oktatók és trénerek vezetnek. A megerősített oktatók és az iLead Institute szakértői között van például Radek Špicar, David Vrba és mások."
  },
  {
    text: "A programban több személy is részt vehet ugyanabból a cégből. A csoport különböző cégekből, ágazatokból és szakterületekről származó résztvevőkből fog állni, de lehetséges több személy jelentkezése is egy vállalatból. Ez szoros együttműködést tesz lehetővé az oktatókkal és a vállalati esetekre való összpontosítást. A csoport diverzitása növeli a megosztott tapasztalatok értékét."
  },
  {
    text: "A Future Ready Executive program felső vezetők és vezetők számára készült, akik a jövő kompetenciáit kívánják fejleszteni és piaci pozíciójukat erősíteni. Ajánljuk a B-1 típusú pozícióban lévő személyek számára. Üdvözöljük a különböző tapasztalatokkal rendelkező vezetőket és vezetőnőket, akik nemcsak reagálni szeretnének az új kihívásokra, hanem befolyásolni is a piaci trendeket. A program családi vállalkozások és tervezett utódlás számára is megfelelő, széles perspektívát nyit a résztvevők számára az úgynevezett glocal üzletre. A témák átfogóan vannak feldolgozva, hogy támogassák a specializált területek vezetőit is a kompetenciák bővítésében és a vállalatra vonatkozó stratégiai szemlélet kialakításában."
  },
  {
    text: "Az MBA programokkal ellentétben nincs szükség formális követelmények teljesítésére korábbi végzettségek vagy képzési területek tekintetében a programba való válogatás során. A programba való teljes bekapcsolódáshoz és aktív részvételhez ajánlott az üzleti témák alapvető ismerete (képzéssel vagy gyakorlattal megszerzett). A program olyan személyek számára készült, akik már rendelkeznek tapasztalattal saját üzlet, csapat vezetésében vagy felkészülnek a felsővezető szerepre."
  },
  {
    text: "A Future Ready Executive program résztvevői csoportját úgy tervezzük, hogy minden résztvevő a lehető legjobb lehetőséget kapja a személyes fejlődésre és az oktatóval való kapcsolatra. A kis csoport lehetővé teszi saját esetek, tapasztalatok és kihívások megosztását a csoporton belül."
  },
  {
    text: "Az oktatás csehül zajlik. Minden anyag, cikk, jelentés és esettanulmány az MIT-ről és más forrásokból a résztvevők számára cseh nyelvre lesz fordítva. Néhány vendégelőadó külföldi lehet, ezért az angoltudás előnyös, de nem kötelező – a tartalom mindenki számára elérhető lesz."
  },
  {
    text: "A workshopok során prezentációk, viták, gyakorlati gyakorlatok és szimulációk zajlanak. Modern eszközöket és formátumokat használunk – például kártyák, szimulációs játékok, személyiségtesztek és mesterséges intelligencia alapú eszközök. Részét képezik cseh, szlovák és világméretű esettanulmányok is. Minden találkozó maximálisan interaktív és bevonó."
  },
  {
    text: "Ha többet szeretne megtudni a programról, megismerni az oktatókat és részletekről érdeklődni, hagyja nálunk e-mail címét és telefonszámát. Az iLead Institute csapatának egy tagja a lehető leghamarabb felveszi Önnel a kapcsolatot."
  },
  {
    text: "A hivatalos blokkokon kívül is szükség lehet elkötelezettségre. Feltételezzük önálló feladatok vagy gyakorlatok kiadásának lehetőségét a blokkok között. Néhány oktató úgynevezett pre-work-öt biztosíthat a blok előtt. Hiányzás esetén lehetőség lesz a hiányzó rész pótlására. A program nagyon egyénre szabottan van beállítva a résztvevők igényeire és lehetőségeire tekintettel."
  },
  {
    text: "A program ára nem tartalmazza a szállást és az egyes találkozókra történő utazást. Ezeket a költségeket a résztvevők önállóan fizetik."
  },
  {
    text: "A Future Ready Executive programot nem zárul vizsga vagy záródolgozat. Az MBA-val ellentétben a programban való részvétel a résztvevők blokkok alatti részvételéről szóló szerződésen alapul. Az egyéni megközelítés, a kis csoport és a közvetlen kapcsolat az oktatóval hivatott biztosítani a kompetenciák valódi fejlődését, ezért nem tervezzük a tudás formális ellenőrzését."
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

  console.log('🚀 Starting information block embeddings generation...');
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

  const outputPath = path.join(process.cwd(), 'data', 'faq-embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify(embeddingsData, null, 2));

  console.log(`\n✨ Success! Generated ${embeddingsData.length} embeddings`);
  console.log(`📁 Saved to: ${outputPath}`);
  console.log(`📦 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB\n`);
}

generateEmbeddings().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
