// Tell a Whole Story in 32 Characters
// Entry: a single Wi-Fi network name that reads as the household's
// apology to the neighbours for one very loud night.
// "SorryAboutThe3amKaraoke" — 23 characters, one confession, one incident.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "SorryAboutThe3amKaraoke";

const outputDir = process.env.OUTPUT_DIR || "output";
const outputPath = join(outputDir, "entry.txt");

// Gate: 1-32 characters of UTF-8 text, not only whitespace, one line.
const length = [...ENTRY].length;
if (length < 1 || length > 32 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-32 characters, got ${length}: ${JSON.stringify(ENTRY)}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line (one Wi-Fi network name)");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${length}-character entry to ${outputPath}`);
