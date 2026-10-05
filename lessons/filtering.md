# Filter the corpus before choosing Top K

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Keep tenant and version boundaries while retrieving a useful current document.

## Outcome

A counterexample showing how filtering only after Top K can leave an empty result.

## Scope

This is exact dot-product sorting of three handwritten vectors. It does not implement a vector database, HNSW, or a production authorization system.

## Concept

Ranking and eligibility answer different questions. A passage can score highly and still belong to another tenant or an obsolete version. The exercise compares selecting from eligible records with filtering a globally truncated result.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/filtering.mjs
```

[Read the complete code](../exercises/filtering.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
Filter after top 1: 0 results
Filter before top 1: current-policy
```

## Walkthrough

### 1. Inspect the candidate pool

The highest-scoring record belongs to tenant B. Tenant A's old policy is second; its current policy is third. The request is for tenant A's current content only.

### 2. Run the post-filter baseline

Take the global top result and then check eligibility. The only candidate is rejected, leaving zero results even though a valid current policy exists.

### 3. Run the eligible-corpus search

Filter by tenant and current version first, then rank. The valid current-policy record is returned. The printed results show why these two orders are not equivalent.

### 4. Carry the boundary into an integration

When using a database, apply trusted access constraints in its query and check its filtered-search behavior. Test strict filters, no eligible results, deleted records, and current-version changes with representative data.

## Try a change

Add a second current tenant-A document and test K=2. Then mark both current records false and verify that no result is returned instead of relaxing the access filter.

## Check your result

Every returned record is eligible, and you can explain the empty post-filter result without blaming the similarity metric.

## Troubleshooting

Increasing global K may find an eligible record but does not replace access control. Approximate indexes may also have different recall behavior under restrictive filters; measure it.

## Technical references

- [Qdrant: filtering](https://qdrant.tech/documentation/search/filtering/)
- [Sentence Transformers: semantic textual similarity](https://sbert.net/docs/sentence_transformer/usage/semantic_textual_similarity.html)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
