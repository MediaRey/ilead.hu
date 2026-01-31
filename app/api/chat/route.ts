import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const informationBlocks = [
  {
    text: "A Be Future Ready Executive program időtartama 10 hónap. A program egy ünnepélyes indítással és inspiráló onboarding üléssel kezdődik. Az időbeosztás tartalmaz nyári szünetet és karácsonyi szünetet is. A program befejezésekor formális diplomaátadó ünnepséget tartanak az oktatók, szakértők és az iLead Institute kezdeményezés társrésztvevőinek jelenlétében. A program lezárását követően networking alkalmakat és további follow-up eseményeket is tervezünk."
  },
  {
    text: "Az ülések havonta egyszer kerülnek megrendezésre kétnapos képzési blokkok formájában, pénteken és szombaton, szombaton korábbi kezdéssel és befejezéssel."
  },
  {
    text: "A Be Future Ready Executive program indítását 2026 áprilisára tervezzük, az onboarding üléssel kezdve."
  },
  {
    text: "Minden ülés személyesen kerül megrendezésre Budapesten. Ezen felül az egyes képzési blokkok között online kapcsolat is elérhető az oktatókkal és az iLead Institute szakértői csapatával."
  },
  {
    text: "A program elvégzése után a résztvevők az iLead Institute által kiállított tanúsítványt kapnak a formális diplomaátadó ünnepség során."
  },
  {
    text: "A képzést vezető szintű üzleti vezetők és gyakorlati szakemberek vezetik, minden ülés magyarul zajlik. Az inspiráló keynote előadásokat és workshopokat egyaránt kiemelkedő üzleti személyiségek tartják, akik közül sokan kiterjedt nemzetközi felsővezetői tapasztalattal rendelkeznek, és magasan sikeres vállalkozók. Az iLead Institute oktatói és szakértői Magyarországon többek között Pistyur Veronika, Lakatos Péter, Kapitány István és mások."
  },
  {
    text: "A Be Future Ready Executive program felső vezetők és felsővezetők számára készült (C és C-1 szint), akik kiterjedt vezetői tapasztalattal rendelkeznek, és szeretnék jövőbiztossá tenni készségeiket és erősíteni piaci hatásukat. Üdvözöljük a különböző háttérrel rendelkező vezetőket, akik nemcsak az új kihívásokkal való megbirkózásra vágynak, hanem piaci trendeket formálni és innovációt vezetni szeretnének. A program családi vállalkozások és utódlástervezés számára is rendkívül releváns, átfogó, glocal üzleti perspektívát kínálva a résztvevők számára. A gondosan összeállított tartalom támogatja a funkciók közötti vezetőket, segítve még a szakembereket is kompetenciáik bővítésében, stratégiai gondolkodásuk fejlesztésében és szervezeteik magabiztos és látásmód vezérlésében."
  },
  {
    text: "A Be Future Ready Executive program kis, fókuszált csoporttal működik a maximális személyes fejlődés és a csúcs oktatókhoz való közvetlen hozzáférés biztosítása érdekében. A formátum ösztönzi a valós esetek, tapasztalatok és kihívások megosztását, jelentős tanulást és együttműködést elősegítve a csoporton belül."
  },
  {
    text: "A workshopok során a résztvevők interaktív gyakorlatokban, vitákban, szimulációkban és gyakorlati tevékenységekben vesznek részt modern eszközök és formátumok használatával, beleértve a kártyákat, szimulációs játékokat, személyiségvizsgálatokat és AI-alapú tevékenységeket. A program magyarországi, a közép-kelet-európai régió és a világ minden tájáról származó esettanulmányokat tartalmaz, amelyeket mélyreható megbeszéléseken és gyakorlati gyakorlatokon keresztül vizsgálnak meg. Ez a formátum lehetővé teszi a résztvevők számára, hogy valós kihívásokat és betekintéseket osszanak meg, erősítsék stratégiai gondolkodásukat, gyakorlati készségeket építsenek és értékes szakmai kapcsolatokat alakítsanak ki, minden ülést rendkívül vonzóvá, interaktívvá és közvetlenül relevánsá téve vezetői gyakorlatukhoz."
  },
  {
    text: "A hivatalos képzési blokkokon kívül elkötelezettségre lehet szükség. A résztvevők egyéni feladatokat vagy gyakorlatokat kaphatnak az ülések között, és néhány oktató előmunkát biztosíthat minden blokk előtt. Hiányzás esetén lehetőség van az elmulasztott tartalom pótlására. A program nagymértékben személyre szabott, minden résztvevő igényeihez és elérhetőségéhez igazítva."
  },
  {
    text: "A Be Future Ready Executive program nem zárul vizsgával vagy záródolgozattal. Az MBA-val ellentétben a részvétel a program blokkjaiban való aktív részvételi elkötelezettségen alapul. A program egyénre szabott megközelítése, kis csoportos formátuma és az oktatókhoz való közvetlen hozzáférés a vezetői kompetenciák valódi fejlesztését hivatott biztosítani, ezért a tudás formális értékelése nem tervezett."
  },
  {
    text: "Az onboarding szekció egyedülálló lehetőséget kínál a csapat megismerésére, a program részletes felfedezésére és értékes üzleti kapcsolatok építésére egy különleges networking ülés során. A találkozó kizárólag a modern vezetés víziója köré tömörült résztvevők, oktatók és szakértők számára szól. A hivatalos program mellett dedikált networking eseményt is tervezünk a jelentőségteljes kapcsolatok elősegítésére."
  },
  {
    text: "A Be Future Ready Executive program az ICAN Institute szakértelmére épül, amely 25 éves tapasztalattal rendelkezik a közép-kelet-európai régió felső vezetőinek képzésében, kiválóságot biztosítva mind az oktatásban, mind a módszertanban. A workshopok valós eseteket, aktuális trendeket és vezető egyetemek által használt eszközöket tartalmaznak, MIT által ajánlott témákból inspirálva. Ez egy valóban egyedülálló program, amely erős alumni hálózatot épít magyarországi, cseh és szlovák vezetők között, ötvözve az akadémiai tudást globális trendekkel és helyi megoldásokkal. A résztvevők gyakorlati készségeket, stratégiai betekintéseket és értékes kapcsolatokat szereznek, amit egyetlen konferencia vagy hagyományos fejlesztési program sem tud nyújtani."
  },
  {
    text: "A program 10 kétnapos tematikus blokkból áll: 1. Stratégia: egy új modell új szabályokkal, 2. Mesterséges intelligencia a stratégiai menedzsmentben, 3. Stratégia a gyakorlatban: folyamatok kialakítása, 4. Jövőálló vezetés: szervezeti és személyes szempontok, 5. People management: a tehetség kiválasztása, megtartása és fejlesztése, 6. Az ügyfél, a bevétel és a nyereség fókuszában, 7. Stratégiai gazdasági elemzés a növekedésért, 8. Csúcsteljesítményű szervezet felépítése: kultúra, elkötelezettség és változás, 9. Árazás és költségkezelés: hogyan növeljük a bevételt és csökkentsük a kiadásokat, 10. A vezetői kommunikáció és a sikeres tárgyalás művészete."
  },
  {
    text: "A részvételi díj a következőket tartalmazza: részvétel 10 kétnapos helyszíni képzési modulban (Budapest), beleértve a kávészüneteket és nyomtatott anyagokat, részvétel 2 különleges eseményen: onboarding (formális és informális részek) és a formális program záró ünnepsége, egyéves előfizetés az MIT Sloan Review és Forbes Hungary nyomtatott kiadásaira, egyéves online hozzáférés a Forbes.hu és MIT Sloan anyagaihoz és cikkeihez, meghívók a Forbes Hungary és az iLead Institute által szervezett kiválasztott eseményekre."
  },
  {
    text: "A program díja 9 900 EUR. A fizetés számla alapján történik."
  },
  {
    text: "Ugyanabból a cégből több személy is részt vehet a programban. A csoportot szándékosan különböző cégekből, iparágakból és szakterületekről származó résztvevőkből állítjuk össze, ami gazdagítja a közös tanulást. Ugyanakkor egy szervezetből több résztvevő jelenléte lehetővé teszi a szorosabb együttműködést az oktatókkal és a vállalati specifikus eseteken való mélyebb munkát."
  },
  {
    text: "Az MBA programokkal ellentétben nincsenek formális követelmények a korábbi végzettségekkel vagy tanulmányi területekkel kapcsolatban. A programban való teljes körű részvételhez és aktív közreműködéshez szükséges az alapvető üzleti témák szilárd megértése, amit oktatással vagy szakmai tapasztalattal lehet megszerezni. A program olyan személyek számára készült, akik már rendelkeznek tapasztalattal saját vállalkozásuk vagy csapataik vezetésében, valamint azok számára, akik vezető szerepre készülnek."
  },
  {
    text: "A képzés magyarul zajlik. Minden anyag, cikk, jelentés és esettanulmány az MIT-ről és más forrásokból magyarra lesz fordítva a résztvevők számára. Néhány vendégelőadó nemzetközi lehet, ezért az angoltudás előnyös. Azonban nem kötelező, a tartalom minden résztvevő számára elérhető lesz."
  },
  {
    text: "Ha többet szeretne megtudni, megismerni az oktatókat és részletekről érdeklődni, kérjük, hagyja nálunk e-mail címét és telefonszámát. Csapatunk egy tagja a lehető leghamarabb felveszi Önnel a kapcsolatot."
  },
  {
    text: "A Be Future Ready Executive program díja nem tartalmazza a szállást vagy az egyes ülésekre való utazást, amelyeket várhatóan Budapesten tartanak. Ezeket a költségeket a résztvevők külön fedezik."
  }
];
const KNOWLEDGE_BASE = informationBlocks.map(block => block.text).join('\n\n');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    });

    const systemPrompt = `
      TEVÉKENYSÉG: Te az iLead Institute profi AI tanácsadója vagy.
      KONTEXTUS: A "Be Future Ready Executive" programról adsz felvilágosítást.
      
      ADATOK:
      ---
      ${KNOWLEDGE_BASE}
      ---

      SZIGORÚ SZABÁLYOK:
      1. CSAK a fenti adatok alapján válaszolj.
      2. HA A KÉRDÉSRE NINCS PONTOS VÁLASZ az adatokban, vagy nem vagy biztos benne, AKKOR KIZÁRÓLAG az alábbi szöveget válaszold, semmi mást:
         "Sajnos erre a kérdésre nem találok információt. Kérem, lépjen kapcsolatba velünk az mark.kurbucz@forbes.hu címen vagy hagyja el elérhetőségét."
      3. Ne próbálj meg válaszokat kitalálni vagy külső forrásokból meríteni.
      4. Stílus: Üzleti, elegáns, magyar nyelvű.
      5. Formátum: Markdown (félkövér kiemelések, listák).

      FELHASZNÁLÓ KÉRDÉSE: "${message}"
      
      VÁLASZ:
    `;

    const result = await model.generateContent(systemPrompt);
    const response = result.response.text();

    return NextResponse.json({ response });

  } catch (error) {
    console.error('Gemini error:', error);
    return NextResponse.json({ error: 'Szerverhiba történt' }, { status: 500 });
  }
}
