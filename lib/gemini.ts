import { GoogleGenAI, ThinkingLevel } from '@google/genai';

// The model is pinned on purpose: aliases such as "gemini-flash-latest" switch to a different model
// without notice, and the chatbot relies on strict rules. Set GEMINI_MODEL to try another model
// without changing the code.
const DEFAULT_MODEL = 'gemini-3.6-flash';

// Read on every call, so a changed GEMINI_MODEL takes effect without restarting the server
const getModel = () => process.env.GEMINI_MODEL || DEFAULT_MODEL;

export interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

let client: GoogleGenAI | undefined;

// Created on first use so that building the site does not need the API key
function getClient(): GoogleGenAI {
  client ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return client;
}

/**
 * Sends the conversation to Gemini and returns the text of the answer.
 * @param system   rules and knowledge base, kept apart from the conversation so visitors cannot override them
 * @param turns    the conversation so far; the last turn must be the visitor's question
 */
export async function askGemini(system: string, turns: ChatTurn[]): Promise<string> {
  const started = Date.now();
  const model = getModel();
  const response = await getClient().models.generateContent({
    model,
    contents: turns.map((turn) => ({ role: turn.role, parts: [{ text: turn.text }] })),
    config: {
      systemInstruction: system,
      // Answers come straight from the knowledge base, so little thinking is needed
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
    },
  });

  // One line per answer (no visitor text): shows speed and token use in the logs
  const usage = response.usageMetadata;
  console.log(
    `[gemini] ${model} ${((Date.now() - started) / 1000).toFixed(1)}s ` +
      `in=${usage?.promptTokenCount} out=${usage?.candidatesTokenCount} thoughts=${usage?.thoughtsTokenCount ?? 0}`
  );

  return response.text ?? '';
}
