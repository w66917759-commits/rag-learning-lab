// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

const relevant = new Set(["rule", "exception"]);
const ranked = ["rule", "shipping", "exception"];
function evaluate(k) {
  const retrieved = [...new Set(ranked)].slice(0, k);
  const hits = retrieved.filter(id => relevant.has(id)).length;
  return { precision: hits / retrieved.length, recall: hits / relevant.size };
}
for (const k of [1, 2, 3]) {
  const result = evaluate(k);
  console.log("K=" + k + " precision=" + result.precision.toFixed(2) + " recall=" + result.recall.toFixed(2));
}
assert.equal(evaluate(1).recall, 0.5);
assert.equal(evaluate(3).recall, 1);
assert.equal(evaluate(3).precision, 2 / 3);
