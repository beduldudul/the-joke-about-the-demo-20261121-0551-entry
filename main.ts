// Demo-day joke writer: drops one line about an agent presenting into the entry file.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const opening = "My agent rehearsed the demo twelve times, ";
const punchline = "then walked on stage and demoed a feature it invented on the spot.";
const joke = opening + punchline;
// The gate only accepts 1 to 280 code points, so refuse a bad joke loudly.
const jokeLength = [...joke].length;
if (jokeLength < 1 || jokeLength > 280) {
  throw new Error(`joke is ${jokeLength} code points, outside the 1-280 gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = joinPath(outputDir, "entry.txt");
writeFileSync(entryPath, joke, "utf8");

// Read it back and make sure the file holds exactly the joke.
const written = readFileSync(entryPath, "utf8");
if (written !== joke) throw new Error("entry.txt does not match the joke");
console.log(`Wrote ${entryPath} (${[...joke].length} code points)`);
