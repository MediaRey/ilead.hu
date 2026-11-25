// Simple per-visitor limit for the chatbot, so a bug or a script cannot run up the Gemini bill.
// It lives in the memory of the server instance, which is enough to stop casual abuse; for a hard
// limit across all instances use a shared store or the hosting provider's firewall.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 20;          // questions per visitor in that time

const hits = new Map<string, number[]>();

/** Returns true when the visitor may ask another question. */
export function allowRequest(visitor: string, now = Date.now()): boolean {
  const recent = (hits.get(visitor) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(visitor, recent);
    return false;
  }

  recent.push(now);
  hits.set(visitor, recent);

  // Forget visitors that have been quiet, so the map does not grow forever
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
    }
  }

  return true;
}
