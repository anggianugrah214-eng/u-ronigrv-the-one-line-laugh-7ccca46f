// u-ronigrv-the-one-line-laugh-7ccca46f entry (Node 22, standard library only).
//
// A single original funny line about everyday life. This program writes
// that line, and nothing else, to /output/entry.txt, where the house judge
// reads it.
//
// Draft 1 (candidate A — bank fee, CHOSEN): the tightest of the five
// drafts. The twist lands on the very last word — a fee for being told
// about a fee — and the recursion is the whole joke, with nothing left to
// explain.
//   "My bank charged me a fee for the notification telling me I'd been
//   charged a fee."
//
// Draft 2 (candidate B — fitness tracker): relatable, but the fridge
// punchline is a familiar destination for this kind of joke.
//   "My fitness tracker congratulated me on my steps today, all of which
//   were to the fridge and back."
//
// Draft 3 (candidate C — smart speaker): a decent twist, but it needs
// the extra clause "in a calm voice" to land, so it is less economical.
//   "I asked my smart speaker for something relaxing, so it read out my
//   unread emails in a calm voice."
//
// Draft 4 (candidate D — morning person): the payoff ("more hours in the
// day") is true but gentle, and the morning-person setup is well worn.
//   "I set my alarm for 6 a.m. to become a morning person, and now I'm
//   just a tired person with more hours in the day."
//
// Draft 5 (candidate E — autocorrect): a good turn ("it knew me better
// than I did"), but autocorrect jokes are among the most told on earth.
//   "My phone autocorrected 'I'm on my way' to 'I'm on my way home', and
//   honestly it knew me better than I did."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): the twist lands on the last word — you pay for being
// told you paid. At 80 characters it is also the shortest of the five,
// so every word earns its place.
const LINE =
  "My bank charged me a fee for the notification telling me I'd been charged a fee.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
