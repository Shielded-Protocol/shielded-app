import type { ShieldedNote } from '@shielded/core';

const NOTES_KEY = 'shielded:notes';

/**
 * Saves notes to localStorage (encrypted in production — 
 * TODO: add AES-GCM encryption using user's wallet public key)
 */
export function saveNote(note: ShieldedNote): void {
  const existing = loadNotes();
  const updated = [...existing.filter(n => n.commitment !== note.commitment), note];
  localStorage.setItem(NOTES_KEY, JSON.stringify(updated.map(serializeNote)));
}

export function loadNotes(): ShieldedNote[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(NOTES_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw).map(deserializeNote);
  } catch {
    return [];
  }
}

export function markNoteSpent(commitment: string): void {
  const notes = loadNotes();
  const updated = notes.map(n => 
    n.commitment === commitment ? { ...n, spent: true } : n
  );
  localStorage.setItem(NOTES_KEY, JSON.stringify(updated.map(serializeNote)));
}

function serializeNote(note: ShieldedNote): Record<string, string | number | boolean | null> {
  return {
    secret: note.secret.toString(),
    amount: note.amount.toString(),
    tokenId: note.tokenId.toString(),
    commitment: note.commitment,
    nullifier: note.nullifier,
    index: note.index,
    spent: note.spent,
  };
}

function deserializeNote(raw: Record<string, string | number | boolean | null>): ShieldedNote {
  return {
    secret: BigInt(raw.secret as string),
    amount: BigInt(raw.amount as string),
    tokenId: BigInt(raw.tokenId as string),
    commitment: raw.commitment as string,
    nullifier: raw.nullifier as string,
    index: raw.index as number | null,
    spent: raw.spent as boolean,
  };
}
