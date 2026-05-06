import Anthropic from "@anthropic-ai/sdk";

let _client: Anthropic | null = null;

export function getClient(): Anthropic | null {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  if (!_client) _client = new Anthropic({ apiKey: key });
  return _client;
}

export const MODEL_GEN =
  process.env.ANTHROPIC_MODEL_GEN || "claude-haiku-4-5-20251001";
export const MODEL_GRADE =
  process.env.ANTHROPIC_MODEL_GRADE || "claude-sonnet-4-6";
