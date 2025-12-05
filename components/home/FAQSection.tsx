'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: "Jak dlouho trvá program (be) Future Ready Executive?",
    answer: "Program trvá 6-9 měsíců v závislosti na vybraném formátu. Nabízíme flexibilní časový harmonogram přizpůsobený potřebám pracujících manažerů."
  },
  {
    question: "Co obsahuje onboardingová sekce?",
    answer: "Onboarding zahrnuje úvodní setkání, seznámení s platformou, networking session a nastavení vašich osobních cílů v rámci programu."
  },
  {
    question: "Kolikrát měsíčně se konají setkání?",
    answer: "Setkání probíhají 1-2x měsíčně, kombinace prezenční výuky a online sessionů podle harmonogramu modulu."
  },
  {
    question: "V čem se program (be) Future Ready Executive liší od jiných tréninkú, rozvojových programů nebo MBA?",
    answer: "Program kombinuje vědecké poznatky z MIT s praktickou aplikací v českém business prostředí, nabízí flexibilitu a zaměření na okamžitou použitelnost."
  },
  {
    question: "Kdy začíná program (be) Future Ready Executive?",
    answer: "Nové běhy programu startují obvykle na začátku března a října. Přesné termíny naleznete na našem webu nebo vás budeme informovat emailem."
  },
  {
    question: "Jaká témata jsou v programu (be) Future Ready Executive?",
    answer: "Program pokrývá strategické myšlení, řízení týmů, inovace, change management, digitální transformaci a další klíčové oblasti moderního leadershipu."
  },
  {
    question: "Jsou setkání online, nebo prezenčně?",
    answer: "Program kombinuje prezenční setkání a online sessiony pro maximální flexibilitu. Poměr je přibližně 50/50."
  },
  {
    question: "Co zahrnuje cena za účast v programu (be) Future Ready Executive?",
    answer: "Cena zahrnuje všechny moduly, studijní materiály, přístup k platformě, networking eventy a certifikát po absolvování."
  },
  {
    question: "Jaký certifikát získám po absolvování programu?",
    answer: "Po úspěšném absolvování obdržíte certifikát od iLead Institute, který je uznávaný v business komunitě."
  },
  {
    question: "Kolik stojí účast v programu?",
    answer: "Cena programu je na vyžádání. Kontaktujte nás pro aktuální ceník a možnosti firemního financování."
  },
  {
    question: "Kdo vede školení / kdo jsou lektoři?",
    answer: "Lektoři jsou zkušení lídři, odborníci z praxe a akademici s reálnou business zkušeností a teoretickým zázemím."
  },
  {
    question: "Může se programu zúčastnit více osob z jedné firmy?",
    answer: "Ano, nabízíme speciální firemní balíčky pro skupiny ze stejné organizace s výhodnějšími podmínkami."
  },
  {
    question: "Pro koho je program (be) Future Ready Executive určen?",
    answer: "Program je určen pro manažery a lídry s minimálně 3-5 lety praxe v řídící pozici, kteří chtějí posunout své leadership skills."
  },
  {
    question: "Jak probíhá proces výběru do programu?",
    answer: "Proces zahrnuje vyplnění přihlášky, pohovor a posouzení vašich cílů a očekávání od programu."
  },
  {
    question: "Kolik osob bude ve skupině?",
    answer: "Maximální počet účastníků v jedné skupině je 20-25 lidí pro zajištění individuálního přístupu a kvalitního networkingu."
  },
  {
    question: "Je pro účast v programu nutná znalost angličtiny?",
    answer: "Program probíhá v českém jazyce. Znalost angličtiny je výhodou pro studium materiálů z MIT, ale není podmínkou."
  },
  {
    question: "Jaké formáty budou na trénincích použity?",
    answer: "Kombinujeme přednášky, case studies, workshopy, skupinové diskuse a praktické projekty."
  },
  {
    question: "Jak získat více informací o programu? S kým se spojit?",
    answer: "Kontaktujte nás na info@ilead.cz nebo vyplňte kontaktní formulář na našem webu."
  },
  {
    question: "Bude potřeba angažmá i mimo oficiální bloky?",
    answer: "Ano, očekává se samostudium a práce na projektech mimo prezenční setkání, cca 4-6 hodin týdně."
  },
  {
    question: "Co není zahrnuto v ceně programu (be) Future Ready Executive?",
    answer: "Cena nezahrnuje dopravu, ubytování při prezenčních setkáních a případné dodatečné certifikace."
  },
  {
    question: "Je na konci programu zkouška?",
    answer: "Program končí prezentací závěrečného projektu, nikoliv klasickou zkouškou."
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
    <section id="faq" className="py-20 bg-gray-50 px-4">
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
