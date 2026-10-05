// SaveMyToken local lab. Run with Node.js 22 or newer.
import assert from "node:assert/strict";

const sources = new Map([
  ["returns-v2", "Unused items: 30 days. Opened items: not eligible."],
]);
// ID validation is structural. A person must still check claim support.
function checkCitation(answer) {
  if (answer.status === "unknown") return answer.sourceId === null ? "ABSTAIN" : "REJECT";
  return sources.has(answer.sourceId) ? "REVIEW SUPPORT" : "REJECT";
}
const cases = [
  { status: "answered", text: "Unused items have 30 days.", sourceId: "returns-v2" },
  { status: "answered", text: "All items have 90 days.", sourceId: "invented" },
  { status: "unknown", text: "No evidence about gift cards.", sourceId: null },
];
const results = cases.map(checkCitation);
console.log(results.join(" | "));
assert.deepEqual(results, ["REVIEW SUPPORT", "REJECT", "ABSTAIN"]);
// This passes ID validation but is false: validate meaning separately.
assert.equal(checkCitation({ status: "answered", text: "90 days", sourceId: "returns-v2" }), "REVIEW SUPPORT");
