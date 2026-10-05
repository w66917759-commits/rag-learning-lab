// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

// Exact dot-product ranking over toy vectors, not an ANN index.
const query = [1, 0];
const records = [
  { id: "other-tenant", tenant: "B", current: true, vector: [1, 0] },
  { id: "old-policy", tenant: "A", current: false, vector: [0.99, 0.01] },
  { id: "current-policy", tenant: "A", current: true, vector: [0.8, 0.2] },
];
const score = row => row.vector.reduce((sum, x, i) => sum + x * query[i], 0);
const rank = rows => [...rows].sort((a, b) => score(b) - score(a));
const eligible = row => row.tenant === "A" && row.current;
const postFilter = rank(records).slice(0, 1).filter(eligible);
const preFilter = rank(records.filter(eligible)).slice(0, 1);
assert.equal(postFilter.length, 0);
assert.equal(preFilter[0].id, "current-policy");
console.log("Filter after top 1:", postFilter.length, "results");
console.log("Filter before top 1:", preFilter[0].id);
