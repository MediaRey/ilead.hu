import { NextRequest, NextResponse } from 'next/server';
import { askGemini, type ChatTurn } from '@/lib/gemini';
import { buildSystemInstruction, isChatPage } from '@/lib/chat-prompt';
import { allowRequest } from '@/lib/rate-limit';

const MAX_QUESTION_LENGTH = 500;
const MAX_HISTORY_TURNS = 10;
const MAX_TURN_LENGTH = 1500;

/** Last turns of the conversation in the shape Gemini expects; anything malformed is dropped. */
function cleanHistory(history: unknown): ChatTurn[] {
  if (!Array.isArray(history)) return [];

  const turns: ChatTurn[] = [];
  for (const item of history.slice(-MAX_HISTORY_TURNS)) {
    const role = item?.role === 'assistant' ? 'model' : item?.role === 'user' ? 'user' : null;
    const text = typeof item?.content === 'string' ? item.content.trim().slice(0, MAX_TURN_LENGTH) : '';
    if (role && text) turns.push({ role, text });
  }

  // A conversation has to start with the visitor
  while (turns.length && turns[0].role !== 'user') turns.shift();
  return turns;
}

export async function POST(req: NextRequest) {
  try {
    const visitor = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (!allowRequest(visitor)) {
      return NextResponse.json(
        { error: 'Túl sok kérdés érkezett rövid idő alatt. Kérjük, próbálja újra néhány perc múlva.' },
        { status: 429 }
      );
    }

    const { message, history, page } = await req.json();

    if (typeof message !== 'string' || !message.trim() || message.length > MAX_QUESTION_LENGTH) {
      return NextResponse.json(
        { error: `A kérdés legfeljebb ${MAX_QUESTION_LENGTH} karakter lehet.` },
        { status: 400 }
      );
    }

    const turns: ChatTurn[] = [...cleanHistory(history), { role: 'user', text: message.trim() }];
    const response = await askGemini(buildSystemInstruction(isChatPage(page) ? page : 'program'), turns);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Szerverhiba történt. Kérjük, próbálja újra.' }, { status: 500 });
  }
}
