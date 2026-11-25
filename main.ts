// Museum of the Year 3000 — a one-line entry for make.fun.
// The program writes exactly one museum label to /output/entry.txt:
// the label a museum in the year 3000 puts beside an ordinary object
// from today. The object: a group chat, misread by the future as a
// sacred scroll — 47 people, six years of argument, one dinner that
// never happened. Deadpan, curatorial, no explanation of the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Group Chat, c. 2025. A sacred scroll on which 47 people argued for six years about a dinner that never happened.";
// The grader mounts a fresh, writable /output and sets MAKEFUN_OUTPUT_DIR
// to it; locally the same variable points at a scratch dir. Fall back to
// the literal /output path so the program also runs bare.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1–200 characters; fail loudly instead of
// ever writing an over-long line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
// One deterministic write, no clock, no randomness, no network:
// the same bytes on every run, byte-for-byte.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
