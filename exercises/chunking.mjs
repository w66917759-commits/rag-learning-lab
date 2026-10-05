// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

const paragraphs = [
  "Returns: Unused items can be returned within 30 days. Opened items are excluded.",
  "Delivery: Standard shipping takes 3 to 5 working days.",
];
const text = paragraphs.join("\n\n");
const width = 40;
const fixed = Array.from({ length: Math.ceil(text.length / width) },
  (_, i) => text.slice(i * width, (i + 1) * width));
const structured = text.split(/\n\n/);
const containsRule = chunk => chunk.includes("Unused items") && chunk.includes("30 days") && chunk.includes("Opened items are excluded");
console.log("Fixed chunks preserve rule:", fixed.some(containsRule));
console.log("Paragraph chunks preserve rule:", structured.some(containsRule));
assert.equal(fixed.some(containsRule), false);
assert.equal(structured.some(containsRule), true);
