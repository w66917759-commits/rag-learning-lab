// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

// Handwritten 2D vectors for arithmetic; not language embeddings.
function cosine(a, b) {
  if (!a.length || a.length !== b.length || ![...a, ...b].every(Number.isFinite))
    throw new Error("Invalid vectors");
  const normA = Math.hypot(...a), normB = Math.hypot(...b);
  if (normA === 0 || normB === 0) throw new Error("Zero vector");
  return a.reduce((sum, x, i) => sum + x * b[i], 0) / normA / normB;
}
assert.throws(() => cosine([0, 0], [1, 0]), /Zero vector/);
assert.throws(() => cosine([1], [1, 0]), /Invalid vectors/);
assert.equal(cosine([1, 0], [10, 0]), 1);
console.log("Same direction:", cosine([1, 0], [10, 0]).toFixed(2));
console.log("Perpendicular:", cosine([1, 0], [0, 1]).toFixed(2));
console.log("Opposite:", cosine([1, 0], [-1, 0]).toFixed(2));
