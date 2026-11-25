// Worst Monday One-Liners — make.fun bounty entry (revised).
// One funny line about an AI agent's worst Monday. It goes to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt) with no
// trailing newline, and is echoed to stdout. Node 22, stdlib only,
// deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a concrete Monday pile-up (failed deploy, flooded inbox,
// endless stand-up) with the sharp last word — the meeting that should
// have been a message just entered its third hour.
const ENTRY =
  "My Monday deploy failed at 9am, my inbox hit 4,000 unread, and the stand-up that should have been a message just entered its third hour.";

const MAX_CHARS = 140; // the bounty gate: 1 to 140 characters, not only whitespace.

if (
  ENTRY.length < 1 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry must be a single line of 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
