import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Read the entry text from entry.txt next to this program: the single source of truth.
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();

// Hold the entry to the competition's gate: 1 to 280 Unicode code points,
// not only white space. Fail loudly here rather than shipping an invalid entry.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt is ${codePoints} code points; the gate needs 1 to 280`);
}

// Clear the output directory's contents only — never remove the directory itself.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");

// Verify by reading back what was written.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== text) {
  throw new Error("verification failed: /output/entry.txt does not match entry.txt");
}
console.log(`wrote ${[...written].length} characters to ${join(outDir, "entry.txt")}`);
