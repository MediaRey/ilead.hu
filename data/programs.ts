export type ProgramKey = 'bfr' | 'masterclass';

export interface ProgramConfig {
  /** Program name used in emails */
  name: string;
  /** Prefix for admin email subjects, so enquiries can be told apart at a glance */
  subjectPrefix: string;
  /** What visitors download: "brosúra" / "programleírás" */
  docLabel: string;
  docLabelAccusative: string;
  /** Short bullet summary shown in the "thank you" email after a download */
  summaryTitle: string;
  summaryItems: string[];
  download: {
    href: string;
    filename: string;
    modalTitle: string;
    modalText: string;
    modalButton: string;
    successText: string;
  };
}

export const programs: Record<ProgramKey, ProgramConfig> = {
  bfr: {
    name: 'Be Future Ready Executive Program',
    subjectPrefix: '',
    docLabel: 'brosúra',
    docLabelAccusative: 'brosúráját',
    summaryTitle: 'A Be Future Ready Executive Program',
    summaryItems: [
      '10 hónapos gyakorlati vezetői képzés MIT alapokon',
      'Stratégiai menedzsment, AI, innováció',
      'People management és leadership',
      'Tapasztalt oktatók és valós esettanulmányok',
    ],
    download: {
      href: '/program/brochure.pdf',
      filename: 'Be-Future-Ready-Program-2027.pdf',
      modalTitle: 'Töltse le a programleírást',
      modalText:
        'Hagyja meg nekünk az e-mail címét, és megkapja a Future Ready programról szóló brosúrát',
      modalButton: 'Szeretném megkapni a brosúrát',
      successText: 'A brosúra letöltése folyamatban van...',
    },
  },
  masterclass: {
    name: 'My Winning Strategy with AI masterclass',
    subjectPrefix: '[Masterclass] ',
    docLabel: 'programleírás',
    docLabelAccusative: 'programleírását',
    summaryTitle: 'My Winning Strategy with AI',
    summaryItems: [
      'Kétnapos AI masterclass felsővezetőknek',
      'Lencsés Gergővel, az iLead Institute szakmai vezetőjével',
      'Munka a saját vállalaton, AI-eszközökkel és valós esetekkel',
      'Magyar nyelven, személyesen, Budapesten',
    ],
    download: {
      href: '/masterclass/my-winning-strategy-with-ai-masterclass.pdf',
      filename: 'My-Winning-Strategy-with-AI-Masterclass.pdf',
      modalTitle: 'Töltse le a programleírást',
      modalText:
        'Kérjük, adja meg az e-mail címét, és megkapja a My Winning Strategy with AI masterclass programleírását',
      modalButton: 'Szeretném megkapni a programleírást',
      successText: 'A programleírás letöltése folyamatban van...',
    },
  },
};

/** Narrow an untrusted request value to a known program; unknown values fall back to the main program. */
export function resolveProgram(value: unknown): ProgramKey {
  return value === 'masterclass' ? 'masterclass' : 'bfr';
}
