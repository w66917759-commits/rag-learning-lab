// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

// Two supplied rankings: no embedding model is being run here.
const lexical = ["sku-42", "returns", "shipping"];
const semantic = ["returns", "refunds", "sku-42"];
const rankConstant = 60;
const scores = new Map();
for (const list of [lexical, semantic]) {
  [...new Set(list)].forEach((id, index) => {
    scores.set(id, (scores.get(id) ?? 0) + 1 / (rankConstant + index + 1));
  });
}
const ranked = [...scores].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const result = ranked.map(([id]) => id);
console.log("Fused ranking:", result.join(", "));
assert.deepEqual(result, ["returns", "sku-42", "refunds", "shipping"]);
assert.equal(new Set(result).size, result.length);
