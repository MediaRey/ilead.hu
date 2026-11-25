// Everything the chatbots know, in one place. Each topic has its own block of facts; the bot receives all of
// them, so every chat can answer about every topic. Facts are taken from the site and the client's documents.
// The masterclass has no dates on purpose: it runs several times.

import { sortedInstructors } from '@/data/instructors';

export type Topic = 'program' | 'masterclass' | 'magazine' | 'ilead';

export interface TopicInfo {
  /** Heading of the section in the knowledge base */
  title: string;
  /** Short note placed under the heading so generic words ("a program") are not mixed up */
  note?: string;
  /** Page of the site that covers the topic */
  href: string;
  /** Link in Markdown, exactly as the bot should write it */
  link: string;
  /** Topic as it is named in the prompt */
  name: string;
  blocks: string[];
}

export const TOPICS: Record<Topic, TopicInfo> = {
  program: {
    title: 'BE FUTURE READY EXECUTIVE PROGRAM',
    note: 'Ebben a részben „a program” mindig a Be Future Ready Executive Programot jelenti.',
    href: '/be-future-ready-executive-program',
    link: '[Be Future Ready Executive Program](/be-future-ready-executive-program)',
    name: 'a Be Future Ready Executive Program',
    blocks: [
  "A Be Future Ready Executive program időtartama 10 hónap. A program egy ünnepélyes indítással és inspiráló onboarding üléssel kezdődik. Az időbeosztás tartalmaz nyári szünetet és karácsonyi szünetet is. A program befejezésekor formális diplomaátadó ünnepséget tartanak az oktatók, szakértők és az iLead Institute kezdeményezés társrésztvevőinek jelenlétében. A program lezárását követően networking alkalmakat és további follow-up eseményeket is tervezünk.",
  "Az ülések havonta egyszer kerülnek megrendezésre kétnapos képzési blokkok formájában, pénteken és szombaton, szombaton korábbi kezdéssel és befejezéssel.",
  "A Be Future Ready Executive program indítását 2027 márciusára tervezzük, az onboarding üléssel kezdve.",
  "Minden ülés személyesen kerül megrendezésre Budapesten. Ezen felül az egyes képzési blokkok között online kapcsolat is elérhető az oktatókkal és az iLead Institute szakértői csapatával.",
  "A program elvégzése után a résztvevők az iLead Institute által kiállított tanúsítványt kapnak a formális diplomaátadó ünnepség során.",
  "A képzést vezető szintű üzleti vezetők és gyakorlati szakemberek vezetik, minden ülés magyarul zajlik. Az inspiráló keynote előadásokat és workshopokat egyaránt kiemelkedő üzleti személyiségek tartják, akik közül sokan kiterjedt nemzetközi felsővezetői tapasztalattal rendelkeznek, és magasan sikeres vállalkozók. Az iLead Institute oktatói és szakértői Magyarországon: " +
    sortedInstructors.map((i) => `${i.name} (${i.title})`).join('; ') +
    ".",
  "A Be Future Ready Executive program felső vezetők és felsővezetők számára készült (C és C-1 szint), akik kiterjedt vezetői tapasztalattal rendelkeznek, és szeretnék jövőbiztossá tenni készségeiket és erősíteni piaci hatásukat. Üdvözöljük a különböző háttérrel rendelkező vezetőket, akik nemcsak az új kihívásokkal való megbirkózásra vágynak, hanem piaci trendeket formálni és innovációt vezetni szeretnének. A program családi vállalkozások és utódlástervezés számára is rendkívül releváns, átfogó, glocal üzleti perspektívát kínálva a résztvevők számára. A gondosan összeállított tartalom támogatja a funkciók közötti vezetőket, segítve még a szakembereket is kompetenciáik bővítésében, stratégiai gondolkodásuk fejlesztésében és szervezeteik magabiztos és látásmód vezérlésében.",
  "A Be Future Ready Executive program kis, fókuszált csoporttal működik a maximális személyes fejlődés és a csúcs oktatókhoz való közvetlen hozzáférés biztosítása érdekében. A formátum ösztönzi a valós esetek, tapasztalatok és kihívások megosztását, jelentős tanulást és együttműködést elősegítve a csoporton belül.",
  "A workshopok során a résztvevők interaktív gyakorlatokban, vitákban, szimulációkban és gyakorlati tevékenységekben vesznek részt modern eszközök és formátumok használatával, beleértve a kártyákat, szimulációs játékokat, személyiségvizsgálatokat és AI-alapú tevékenységeket. A program magyarországi, a közép-kelet-európai régió és a világ minden tájáról származó esettanulmányokat tartalmaz, amelyeket mélyreható megbeszéléseken és gyakorlati gyakorlatokon keresztül vizsgálnak meg. Ez a formátum lehetővé teszi a résztvevők számára, hogy valós kihívásokat és betekintéseket osszanak meg, erősítsék stratégiai gondolkodásukat, gyakorlati készségeket építsenek és értékes szakmai kapcsolatokat alakítsanak ki, minden ülést rendkívül vonzóvá, interaktívvá és közvetlenül relevánsá téve vezetői gyakorlatukhoz.",
  "A hivatalos képzési blokkokon kívül elkötelezettségre lehet szükség. A résztvevők egyéni feladatokat vagy gyakorlatokat kaphatnak az ülések között, és néhány oktató előmunkát biztosíthat minden blokk előtt. Hiányzás esetén lehetőség van az elmulasztott tartalom pótlására. A program nagymértékben személyre szabott, minden résztvevő igényeihez és elérhetőségéhez igazítva.",
  "A Be Future Ready Executive program nem zárul vizsgával vagy záródolgozattal. Az MBA-val ellentétben a részvétel a program blokkjaiban való aktív részvételi elkötelezettségen alapul. A program egyénre szabott megközelítése, kis csoportos formátuma és az oktatókhoz való közvetlen hozzáférés a vezetői kompetenciák valódi fejlesztését hivatott biztosítani, ezért a tudás formális értékelése nem tervezett.",
  "Az onboarding szekció egyedülálló lehetőséget kínál a csapat megismerésére, a program részletes felfedezésére és értékes üzleti kapcsolatok építésére egy különleges networking ülés során. A találkozó kizárólag a modern vezetés víziója köré tömörült résztvevők, oktatók és szakértők számára szól. A hivatalos program mellett dedikált networking eseményt is tervezünk a jelentőségteljes kapcsolatok elősegítésére.",
  "A Be Future Ready Executive program az ICAN Institute szakértelmére épül, amely 25 éves tapasztalattal rendelkezik a közép-kelet-európai régió felső vezetőinek képzésében, kiválóságot biztosítva mind az oktatásban, mind a módszertanban. A workshopok valós eseteket, aktuális trendeket és vezető egyetemek által használt eszközöket tartalmaznak, MIT által ajánlott témákból inspirálva. Ez egy valóban egyedülálló program, amely erős alumni hálózatot épít magyarországi, cseh és szlovák vezetők között, ötvözve az akadémiai tudást globális trendekkel és helyi megoldásokkal. A résztvevők gyakorlati készségeket, stratégiai betekintéseket és értékes kapcsolatokat szereznek, amit egyetlen konferencia vagy hagyományos fejlesztési program sem tud nyújtani.",
  "A program 10 kétnapos tematikus blokkból áll: 1. Stratégia: egy új modell új szabályokkal, 2. Mesterséges intelligencia a stratégiai menedzsmentben, 3. Stratégia a gyakorlatban: folyamatok kialakítása, 4. Jövőálló vezetés: szervezeti és személyes szempontok, 5. People management: a tehetség kiválasztása, megtartása és fejlesztése, 6. Az ügyfél, a bevétel és a nyereség fókuszában, 7. Stratégiai gazdasági elemzés a növekedésért, 8. Csúcsteljesítményű szervezet felépítése: kultúra, elkötelezettség és változás, 9. Árazás és költségkezelés: hogyan növeljük a bevételt és csökkentsük a kiadásokat, 10. A vezetői kommunikáció és a sikeres tárgyalás művészete.",
  "A részvételi díj a következőket tartalmazza: részvétel 10 kétnapos helyszíni képzési modulban (Budapest), beleértve a kávészüneteket és nyomtatott anyagokat, részvétel 2 különleges eseményen: onboarding (formális és informális részek) és a formális program záró ünnepsége, egyéves előfizetés az MIT Sloan Review és Forbes Hungary nyomtatott kiadásaira, egyéves online hozzáférés a Forbes.hu és MIT Sloan anyagaihoz és cikkeihez, meghívók a Forbes Hungary és az iLead Institute által szervezett kiválasztott eseményekre.",
  "A program díja 9 900 EUR. A fizetés számla alapján történik.",
  "Ugyanabból a cégből több személy is részt vehet a programban. A csoportot szándékosan különböző cégekből, iparágakból és szakterületekről származó résztvevőkből állítjuk össze, ami gazdagítja a közös tanulást. Ugyanakkor egy szervezetből több résztvevő jelenléte lehetővé teszi a szorosabb együttműködést az oktatókkal és a vállalati specifikus eseteken való mélyebb munkát.",
  "Az MBA programokkal ellentétben nincsenek formális követelmények a korábbi végzettségekkel vagy tanulmányi területekkel kapcsolatban. A programban való teljes körű részvételhez és aktív közreműködéshez szükséges az alapvető üzleti témák szilárd megértése, amit oktatással vagy szakmai tapasztalattal lehet megszerezni. A program olyan személyek számára készült, akik már rendelkeznek tapasztalattal saját vállalkozásuk vagy csapataik vezetésében, valamint azok számára, akik vezető szerepre készülnek.",
  "A képzés magyarul zajlik. Minden anyag, cikk, jelentés és esettanulmány az MIT-ről és más forrásokból magyarra lesz fordítva a résztvevők számára. Néhány vendégelőadó nemzetközi lehet, ezért az angoltudás előnyös. Azonban nem kötelező, a tartalom minden résztvevő számára elérhető lesz.",
  "Ha többet szeretne megtudni, megismerni az oktatókat és részletekről érdeklődni, kérjük, hagyja nálunk e-mail címét és telefonszámát. Csapatunk egy tagja a lehető leghamarabb felveszi Önnel a kapcsolatot.",
  "A Be Future Ready Executive program díja nem tartalmazza a szállást vagy az egyes ülésekre való utazást, amelyeket várhatóan Budapesten tartanak. Ezeket a költségeket a résztvevők külön fedezik.",
],
  },
  masterclass: {
    title: 'MY WINNING STRATEGY WITH AI MASTERCLASS',
    href: '/ai-masterclass',
    link: '[My Winning Strategy with AI](/ai-masterclass)',
    name: 'a My Winning Strategy with AI masterclass',
    blocks: [
  "A My Winning Strategy with AI egy kétnapos AI masterclass felsővezetőknek, amelyet Lencsés Gergő, az iLead Institute szakmai vezetője (Head of Faculty) tart. A masterclass azt mutatja meg, hogyan lesz a vezető legjobb tudásából – a jó problémáiból – valódi áttörés az AI segítségével. Az AI a szakmai tudást megsokszorozza, nem pedig kiváltja.",
  "A My Winning Strategy with AI masterclass két napja: az 1. nap témája: Hol írja át az AI a játékszabályokat? (a fő probléma és a központi akadály megfogalmazása egymondatos diagnózissal, a vállalat működésének felbontása kulcstevékenységekre, versenyszimuláció AI-jal). A 2. nap témája: A döntéstől az első lépésig (vezérelv: mit választunk, és mit zárunk ki; AI-ötletek értékelése: melyik érinti a központi akadályt, és mekkora szervezeti ellenállásba ütközik; a legolcsóbb bukás: a legkisebb próba, a tét, a siker jele és az elvetés dátuma; mit hagyunk abba: mit állítunk le, hogy legyen kapacitás az új kezdeményezésekre). A résztvevők végig a saját vállalatukon dolgoznak, AI-eszközökkel, rövid szakértői felvezetésekkel és valós vállalati esetekkel.",
  "A My Winning Strategy with AI masterclass végén a résztvevő nem kész stratégiával, hanem megalapozott kiindulóponttal távozik, amelyre a vezetés biztonsággal alapozhatja a stratégiai párbeszédet: egyoldalas stratégiával (diagnózis, leverage, vezérelv), AI-kitettségi térképpel, 3-5 rangsorolt AI-kezdeményezéssel (beleértve azt is, mit érdemes abbahagyni) és egy 90 napos tesztelési tervvel 3-5 korai jelzőszámmal, amelyek időben megmutatják, hogy a feltételezések teljesülnek-e.",
  "A My Winning Strategy with AI masterclass tulajdonosoknak, felsővezetőknek és stratégiai fontosságú vezetőknek szól, akik a vállalat irányáról döntenek – nem AI- vagy IT-specialistáknak. Technikai előképzettség nem szükséges; egy rövid online bevezető és egy 1–2 oldalas felkészülési sablon segít, hogy az első nap már a lényegről szóljon.",
  "A My Winning Strategy with AI masterclass magyar nyelven, személyesen, Budapesten zajlik. A részvételi díj 1 600 EUR. A részvételi díj magában foglalja a képzés, a helyszín, a catering, az ebéd és a tananyagok díját.",
  "A My Winning Strategy with AI masterclass részvételi díjának 50%-a jóváírásra kerül, ha a résztvevő a Be Future Ready Executive Programra is jelentkezik. A Be Future Ready Executive Programról a Be Future Ready Executive Program oldalán található bővebb információ.",
  "A My Winning Strategy with AI masterclass időpontjairól és a jelentkezésről kérjük, érdeklődjön az mark.kurbucz@forbes.hu címen, vagy hagyja meg elérhetőségét az iLead Institute weboldalának AI Masterclass oldalán, és munkatársunk felveszi Önnel a kapcsolatot.",
],
  },
  magazine: {
    title: 'MIT SLOAN MANAGEMENT REVIEW MAGAZIN (MAGYAR KIADÁS)',
    href: '/subscription',
    link: '[MIT Sloan Management Review](/subscription)',
    name: 'az MIT Sloan Management Review magazin',
    blocks: [
  "Az MIT Sloan Management Review egy nemzetközileg elismert üzleti és menedzsment magazin, amely a vezetés, stratégia, innováció és technológia üzleti hatásaira fókuszál.",
  "A magazin olyan kulcstémákkal foglalkozik, mint a vezetői döntéshozatal, digitális átalakulás, mesterséges intelligencia, innováció és fenntartható növekedés, kutatásalapú, mégis gyakorlatias formában.",
  "A magazin negyedévente jelenik meg nyomtatott formában.",
  "A magazin elsősorban vállalatvezetőknek, menedzsereknek, döntéshozóknak, vállalkozóknak és stratégiai gondolkodóknak szól, akik hosszú távú üzleti előnyre törekednek.",
  "Az előfizetés évente 4 nyomtatott lapszámot tartalmaz, tele elemzésekkel, esettanulmányokkal és vezetői insightokkal.",
  "Az éves előfizetés ára 18 800 HUF, amely a teljes éves (4 lapszámos) kiadást tartalmazza.",
  "Jelenleg a magazin nyomtatott formában érhető el, a digitális verzió bevezetése későbbi fázisban várható.",
  "Érdemes előfizetni a magazinra, mert segít jobban megérteni a globális üzleti trendeket, és konkrét gondolkodási kereteket ad a vezetői döntésekhez.",
  "A magazin valós vállalati példákon és kutatásokon alapuló esettanulmányokat mutat be.",
  "A magazin abban különbözik más üzleti magazinoktól, hogy nem híreket, hanem mély összefüggéseket kínál, és szoros együttműködésben készül a világszerte elismert MIT Sloan Management Review szerkesztőségi és kiadói csapatával.",
  "A tartalom nemzetközi perspektívájú, de kifejezetten releváns közép-európai vezetők számára is.",
  "A magazin kezdő vezetőknek is ajánlott, különösen azoknak, akik strukturáltabb stratégiai gondolkodást szeretnének kialakítani.",
  "Az előfizetés az iLead Institute hivatalos csatornáin keresztül érhető el.",
  "Az iLead Institute a közép-európai régióért felel, beleértve Magyarországot is, és támogatja a magazin elérhetőségét és terjesztését a régióban.",
  "Jelenleg nem áll rendelkezésre kizárólag digitális előfizetés, azonban ez a lehetőség a jövőben felmerülhet.",
  "A magazin magyar nyelven jelenik meg, kifejezetten a magyar és közép-európai üzleti közönség számára.",
  "A magazint megvásárolhatja, megrendelheti vagy előfizethet rá az oldalon lentebb található űrlap kitöltésével.",
],
  },
  ilead: {
    title: 'AZ ILEAD INSTITUTE (A SZERVEZET)',
    href: '/about',
    link: '[Rólunk](/about)',
    name: 'az iLead Institute mint szervezet (kik vagyunk, csapat, küldetés, értékek, partnerek)',
    blocks: [
  "Az iLead Institute a Forbes tulajdonosi köréhez tartozó vezetőképző központ, az MIT Sloan Management Review magyar kiadója. A stratégiai gondolkodást, a gyakorlati menedzsmentet és a legfrissebb nemzetközi tudást kapcsolja össze. Küldetése, hogy vezetőket készítsen fel a jövő kihívásaira.",
  "Az iLead Institute kínálata: a Be Future Ready Executive Program (10 hónapos vezetői program), a My Winning Strategy with AI (kétnapos AI masterclass felsővezetőknek) és az MIT Sloan Management Review magyar kiadásának előfizetése.",
  "Az iLead Institute vezetőfejlesztési programjait olyan nemzetközi tapasztalatokra építi, amelyek már bizonyítottak a régióban. Szakmai partnere a lengyel ICAN Institute, amely 25 éve foglalkozik felsővezetők fejlesztésével Közép- és Kelet-Európában, nagyvállalati és vállalkozói környezetben egyaránt.",
  "Az iLead Institute programjainak célja, hogy a résztvevők átgondoltabban, strukturáltabban és magabiztosabban hozzanak vezetői döntéseket komplex, gyorsan változó helyzetekben. A vezetés, a stratégia és a szervezeti működés kulcskérdéseire fókuszál. Képzései és eseményei gyakorlati tapasztalatokra épülnek, és olyan vezetői közösséget épít, ahol a folyamatos fejlődés a működés természetes része.",
  "Az iLead Institute küldetése: segít eligazodni a vezetői döntések egyre összetettebb világában; nemzetközi tapasztalatokra épülő tudást hoz a vezetés, a stratégia és az innováció területéről; a vezetői kompetenciák fejlesztésére és a csapatok következetes irányítására fókuszál összetett, változó környezetben; a képzéseket a magyar üzleti környezet valós kihívásaihoz igazítja.",
  "Az iLead Institute értékei: nem elméletet tanít, hanem működő vezetői megközelítéseket, amelyek a mai üzleti környezetben már bizonyítottak; a megszerzett tudás azonnal alkalmazható a vezetői döntéshozatalban, csapatirányításban és stratégiai helyzetekben; a legfrissebb kutatási eredményeket és nemzetközi gyakorlatokat integrálja, mindig a gyakorlati hasznosság szempontjából; vezetői közösséget épít, ahol a tapasztalatcsere és az egymástól tanulás a fejlődés része; partnerségeit és működését a szakmai hitelesség, az átláthatóság és a bizalom határozza meg.",
  "Az iLead Institute az MIT Sloan Management Review magyar kiadójaként a világ egyik legelismertebb üzleti tudásplatformjához kapcsolódva hozza el a legfrissebb nemzetközi vezetői és menedzsmentgondolkodást a hazai közönség számára. Oktatási és fejlesztési programjai ebben a nemzetközi kontextusban értelmezhetők: a globális trendekre nyitott, előretekintő vezetői megközelítésre épülnek.",
  "Az iLead Institute és az MIT Sloan Management Review magyar kiadásának csapata: Tomasz Wiatrak (az iLead Institute társalapítója, executive advisor és befektető); Erik Conrad és Peter Barecz (a Forbes Szlovákia, a Forbes Magyarország és a Forbes Csehország társtulajdonosai, az MIT SMR cseh, szlovák és magyar kiadásának társalapítói); Lencsés Gergő (az iLead Institute Head of Faculty-ja, a GE gázturbina operációjának korábbi globális vezetője); Gauder Milán (az MIT Sloan Management Review főszerkesztője, a Mastercard korábbi globális executive alelnöke); Galambos Márton (az MIT Sloan Management Review Media Advisorja, a Forbes ügyvezető igazgatója); Kurbucz Márk (az iLead Institute és az MIT Sloan Management Review Head of Business-e); Baldauf Gáspár (az iLead Institute és az MIT Sloan Management Review Sales and Operations Managere).",
  "Az iLead Institute-tal, a programokkal és az MIT Sloan Management Review magyar kiadásával kapcsolatban Kurbucz Márk, az iLead Institute és az MIT Sloan Management Review Head of Business-e érhető el az mark.kurbucz@forbes.hu e-mail címen.",
],
  },
};

/** The whole knowledge base as text, one headed section per topic. */
export function buildKnowledgeBase(): string {
  return (Object.keys(TOPICS) as Topic[])
    .map((topic) => {
      const { title, note, blocks } = TOPICS[topic];
      return `### ${title}\n${note ? note + '\n\n' : ''}${blocks.join('\n\n')}`;
    })
    .join('\n\n');
}
