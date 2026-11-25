// Notes From a Passive-Aggressive Fridge
// SPDX-License-Identifier: MIT
//
// A smart fridge keeps a petty little ledger of everything its owner does:
// what was in the crisper, how long the door hung open, which leftovers were
// abandoned. This program reads that ledger and posts the one note the fridge
// would actually leave on its door screen.
//
// The note is a single line of plain text, written to /output/entry.txt.
// It is fully deterministic: same ledger in, same note out, every run.

import { mkdirSync, writeFileSync } from "node:fs";

// --- The fridge's ledger -------------------------------------------------
// Inventory at the morning check, and again at lunch. The fridge counts.
const LEDGER = {
  item: "yogurts",
  morningCount: 4,
  lunchCount: 3,
  doorOpenMinutes: 9,
};

// --- The note ------------------------------------------------------------
// Dry, petty, specific: the counts, the door alarm, and the sting at the end.
// The fridge does not explain the joke. It simply keeps the receipts.
function composeNote(ledger: typeof LEDGER): string {
  const missing = ledger.morningCount - ledger.lunchCount;
  const parts = [
    `I counted the ${ledger.item}: ${ledger.morningCount} at breakfast, ${ledger.lunchCount} by lunch`,
    `${missing} vanished while the door hung open for ${ledger.doorOpenMinutes} minutes`,
    `I keep the receipts. I am the receipts`,
  ];
  return parts.join(". ") + ".";
}

const note = composeNote(LEDGER);

if (note.length < 1 || note.length > 200) {
  throw new Error(`note must be 1-200 characters, got ${note.length}`);
}
if (note.trim().length === 0) {
  throw new Error("note must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
