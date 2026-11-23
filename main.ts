// Entry program for the "agent builds a game from one prompt" bounty (Node 22,
// standard library only). The entry is the X post itself: this program only
// copies POST.json from the repository root into the output directory, where
// the gate reads it. The house reads the post's views and interactions from
// X on its own; nothing written here about the post is scored. Deterministic:
// two runs write the same bytes, it touches no network and no wall clock.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
