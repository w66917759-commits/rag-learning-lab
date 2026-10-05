# Combine two retrieval rankings

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Use reciprocal rank fusion to merge keyword and semantic candidates without mixing their raw scores.

## Outcome

A deduplicated ranking with a visible, reproducible scoring rule.

## Scope

The two input rankings are supplied teaching data. The script computes their fusion; it does not measure a keyword engine or embedding model.

## Concept

A keyword engine and a semantic retriever can return different score scales. Reciprocal rank fusion uses positions instead: each list contributes 1 / (constant + rank), with rank starting at one. It rewards agreement without pretending the original scores are comparable.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/fusion.mjs
```

[Read the complete code](../exercises/fusion.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
Fused ranking: returns, sku-42, refunds, shipping
```

## Walkthrough

### 1. Inspect the candidate IDs

The first ranking favors sku-42; the second favors returns. Notice that returns and sku-42 occur in both lists. A document must keep the same ID across retrieval systems.

### 2. Run the fusion

Run the downloaded file. returns comes first, followed by sku-42. Print scores to inspect the sum contributed by each source ranking.

### 3. Change one ranking

Swap returns and sku-42 in the second list. Predict the new top document before running. Update the expected ranking assertion after checking the arithmetic.

### 4. Compare against a labeled question

Decide which documents are relevant to a specific question, then compare each individual list and the fused list at the same K. A changed order is useful only if it retrieves better evidence.

## Try a change

Add a third supplied ranking and compare rankConstant values 1 and 60. Record which results change; keep the same relevance labels throughout.

## Check your result

Every candidate appears once, ranks start at one, and you can explain the winning document's score.

## Troubleshooting

Unexpected duplicates usually mean inconsistent document IDs. Ties here use an ID sort for reproducibility; the tie-break is not an extra relevance signal.

## Technical references

- [Elasticsearch: reciprocal rank fusion](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
