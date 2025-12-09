'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: "Jak dlouho trvá program (be) Future Ready Executive?",
    answer: "Samotný program trvá 10 měsíců a předchází mu slavnostní zahájení a inspirační setkání s onboardingem. Po absolvování programu následuje slavnostní zakončení za přítomnosti lektorů, expertů a účastníků spojených s iniciativou iLead Institute. Po ukončení programu jsou plánována také networkingová setkání a doplňkové akce."
  },
  {
    question: "Co obsahuje onboardingová sekce?",
    answer: "Onboardingová sekce je výjimečnou příležitostí poznat tým, podrobně se seznámit s programem a navázat hodnotné byznysové kontakty při speciálním networkingu. Setkání je určeno pouze pro účastníky, lektory a experty sdružené kolem ideje moderního leadershipu. Vedle oficiální části je plánováno i unikátní networkingové setkání."
  },
  {
    question: "Kolikrát měsíčně se konají setkání?",
    answer: "Setkání probíhají jednou měsíčně formou dvoudenních tréninkových bloků."
  },
  {
    question: "V čem se program (be) Future Ready Executive liší od jiných tréninků, rozvojových programů nebo MBA?",
    answer: "Program stojí na 25 letech zkušeností z evropských trhů inspirovaných tématy doporučovanými MIT. Workshopy obsahují případy z praxe, aktuální trendy a nástroje využívané nejlepšími univerzitami. Propojujeme místní a globální pohled tím, že v roli lektorů a trenérů vystupují přední čeští a slovenští experti. Jde o jedinečný program, kde se potkáte se špičkami českého a slovenského byznysu i akademického světa. Kombinujeme akademické znalosti s globálními trendy a lokálními řešeními. Žádná konference ani rozvojový program nenabídne tak široké kontakty a pohled na management."
  },
  {
    question: "Kdy začíná program (be) Future Ready Executive?",
    answer: "Zahájení programu je plánováno na duben 2026 (onboardingové setkání)."
  },
  {
    question: "Jaká témata jsou v programu (be) Future Ready Executive?",
    answer: "Program obsahuje 10 dvoudenních tematických bloků:\n" +
        "\n" +
        "Vítězné strategie: nový model v rychlém a turbulentním světě, nástroje a klíčové prvky\n" +
        "Umělá inteligence ve strategickém řízení\n" +
        "Operacionalizace a implementace strategie\n" +
        "Leadership připravený na budoucnost: organizační a individuální dimenze\n" +
        "Lídři budují lidi: jak vést, rozvíjet a inspirovat talenty\n" +
        "Budování proklientsky orientované organizace: jak řídit zisk skrze porozumění zákazníkovi\n" +
        "Ekonomika pro lídry: tvorba hodnoty, řízení aktiv a investiční rozhodování\n" +
        "Organizace, která vítězí: kultura, angažovanost a zvládání změn\n" +
        "Mistrovství v cenotvorbě a nákladech: jak zvyšovat příjmy a zároveň snižovat výdaje\n" +
        "Lídr jako komunikátor a vyjednavač: mistrovství dialogu, vlivu a tvorby hodnoty"
  },
  {
    question: "Jsou setkání online, nebo prezenčně?",
    answer: "Všechna setkání probíhají prezenčně – v Praze. Mezi jednotlivými bloky je navíc možný online kontakt s lektory a týmem expertů iLead Institute."
  },
  {
    question: "Co zahrnuje cena za účast v programu (be) Future Ready Executive?",
    answer: "Cena zahrnuje:\n" +
        "\n" +
        "účast na 10 dvoudenních tréninkových blocích na místě (Praha), coffee breaky, tištěné materiály,\n" +
        "účast na 2 speciálních setkáních: onboarding (formální i neformální část s galavečeří) a slavnostní zakončení programu,\n" +
        "roční předplatné tištěného magazínu MIT Sloan Review a Forbes Česko,\n" +
        "roční online přístup k materiálům a článkům na Forbes.cz a MIT Sloan,\n" +
        "pozvánky na vybrané akce pořádané Forbesem a iLead Institute."
  },
  {
    question: "Jaký certifikát získám po absolvování programu ?",
    answer: "Po absolvování programu získáte certifikát vydaný iLead Institute během slavnostní ceremonie."
  },
  {
    question: "Kolik stojí účast v programu?",
    answer: "Cena programu je 230 000 CZK. Platba probíhá na základě faktury."
  },
  {
    question: "Kdo vede školení / kdo jsou lektoři?",
    answer: "Školení vedou zkušení lektoři a praktičtí lídři byznysu, všechna setkání probíhají v češtině. Každý blok obsahuje inspirativní přednášku od zkušeného lídra a workshopy vedené špičkovými lektory a trenéry z Česka a ze Slovenska. Mezi potvrzenými lektory a experty iLead Institute jsou např. Radek Špicar, David Vrba a další."
  },
  {
    question: "Může se programu zúčastnit více osob z jedné firmy?",
    answer: "Ano, skupina bude složená z účastníků z různých firem, oborů a specializací, ale je možné přihlásit více osob z jedné společnosti. To umožní úzkou spolupráci s lektory a zaměření na firemní případy. Diverzita skupiny zvyšuje hodnotu sdílených zkušeností."
  },
  {
    question: "Pro koho je program (be) Future Ready Executive určen ?",
    answer: "Program je určen pro top manažery a lídry, kteří chtějí rozvíjet kompetence budoucnosti a posilovat svoji pozici na trhu. Doporučujeme pro osoby na pozicích typu B-1. Vítáme lídry a lídryně s různorodými zkušenostmi, kteří chtějí nejen reagovat na nové výzvy, ale i ovlivňovat trendy na trhu. Program je vhodný i pro rodinné firmy a plánované nástupnictví, otevírá účastníkům širokou perspektivu tzv. glocal byznysu. Témata jsou zpracována komplexně tak, aby podpořila také manažery specializovaných oblastí v rozšiřování kompetencí a strategického pohledu na firmu."
  },
  {
    question: "Jak probíhá proces výběru do programu?",
    answer: "Na rozdíl od MBA programů není nutné splňovat formální požadavky na předchozí tituly nebo obory vzdělání. Pro plné zapojení do programu a aktivní účast je vhodná znalost základních témat z oblasti byznysu (získaná vzděláním nebo praxí). Program je určen pro osoby, které již mají zkušenosti s vedením vlastního byznysu, týmu nebo se připravují na roli executive."
  },
  {
    question: "Kolik osob bude ve skupině?",
    answer: "Skupina účastníků programu (be) Future Ready Executive je plánována tak, aby měl každý účastník co nejlepší možnost osobního rozvoje a kontaktu s lektorem. Malá skupina umožňuje sdílení vlastních případů, zkušeností i výzev v rámci skupiny."
  },
  {
    question: "Je pro účast v programu nutná znalost angličtiny?",
    answer: "Výuka probíhá v češtině. Veškeré materiály, články, reporty a případové studie z MIT a dalších zdrojů budou účastníkům překládány do češtiny. Někteří z hostujících řečníků mohou být zahraniční, a proto je znalost angličtiny vítaná. Není však nezbytná – obsah bude přístupný všem."
  },
  {
    question: "Jaké formáty budou na trénincích použity ?",
    answer: "Během workshopů probíhají prezentace, debaty, praktická cvičení, simulace. Využíváme moderní nástroje a formáty – například karty, simulační hry, osobnostní testy, AI. Součástí jsou také případové studie z Česka, Slovenska i ze světa. Všechna setkání jsou maximálně interaktivní a zapojující."
  },
  {
    question: "Jak získat více informací o programu? S kým se spojit?",
    answer: "Pokud se chcete dozvědět více, poznat lektory a zeptat se na detaily, zanechte nám svůj e-mail a telefon. Člen našeho týmu vás bude kontaktovat co nejdříve."
  },
  {
    question: "Bude potřeba angažmá i mimo oficiální bloky?",
    answer: "Předpokládáme možnost zadání samostatných úkolů nebo cvičení mezi bloky. Někteří lektoři mohou poskytnout tzv. pre-work před blokem. V případě absence bude možné si chybějící část doplnit. Program je nastaven velmi individuálně s ohledem na potřeby a možnosti účastníků."
  },
  {
    question: "Co není zahrnuto v ceně programu (be) Future Ready Executive?",
    answer: "Cena programu nezahrnuje ubytování a dopravu na jednotlivá setkání. Tyto náklady si účastníci hradí samostatně."
  },
  {
    question: "Je na konci programu zkouška?",
    answer: "Program (be) Future Ready Executive není zakončen zkouškou ani závěrečnou prací. Na rozdíl od MBA je účast v programu založena na kontraktu o zapojení účastníků během bloků. Individuální přístup, malá skupina a přímý kontakt s lektorem mají zajistit skutečný rozvoj kompetencí, proto není plánováno formální ověřování znalostí."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Rozdělení na dvě kolony
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <section id="faq" className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">FAQ – (be) Future Ready Executive</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Левая колонка */}
          <div className="space-y-4">
            {leftColumn.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black pr-4">{item.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Правая колонка */}
          <div className="space-y-4">
            {rightColumn.map((item, index) => {
              const actualIndex = index + midPoint;
              return (
                <div
                  key={actualIndex}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(actualIndex)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-black pr-4">{item.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openIndex === actualIndex ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openIndex === actualIndex && (
                    <div className="px-6 pb-4 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
