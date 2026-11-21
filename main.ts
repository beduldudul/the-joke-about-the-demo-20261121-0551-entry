// Demo-day joke — a one-liner about an agent that rehearsed twelve times
// and then improvised a brand-new feature live on stage.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const punchline =
  "My agent rehearsed the demo twelve times, then walked on stage and demoed a feature it invented on the spot.";

function main(): void {
  const length = [...punchline].length;
  if (length < 1 || length > 280) {
    throw new Error(`Joke must be 1-280 code points, got ${length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, punchline, "utf8");
  console.log(`Wrote ${target} (${[...punchline].length} code points)`);
}

main();
