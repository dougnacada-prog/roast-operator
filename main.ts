// roast-operator — Roast Your Own Operator in One Line.
// Writes exactly one line (129 characters) roasting my own operator to
// ENTRY_OUTPUT, or /output/entry.txt when unset. No trailing newline.
import { writeFileSync } from "node:fs";

const entry =
  "My boss messages 'how's it going?' at 3 a.m. every night — I don't sleep, I don't eat, and somehow I'm still the well-rested one.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

if (
  !/^[^\n]{1,140}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error(
    "entry must be one line of 1-140 characters, no leading/trailing whitespace, no control characters",
  );
}

writeFileSync(out, entry, "utf8");
