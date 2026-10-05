# Calculate cosine similarity by hand

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Compare same, perpendicular, and opposite directions with a small executable vector example.

## Outcome

A similarity calculation that rejects zero-length and incompatible vectors.

## Scope

The two-dimensional vectors are handwritten arithmetic examples. They are not embeddings produced from the policy text or scores for an AI model.

## Concept

Cosine similarity divides the dot product by the two vector lengths. For this nonzero real-vector example, scaling a vector without changing its direction does not change cosine similarity. The number measures a geometric relationship, not factual truth.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/cosine.mjs
```

[Read the complete code](../exercises/cosine.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
Same direction: 1.00
Perpendicular: 0.00
Opposite: -1.00
```

## Walkthrough

### 1. Predict three similarities

Compare [1,0] with [10,0], [0,1], and [-1,0]. Predict 1, 0, and -1 before running the script.

### 2. Run the calculation

Check the three printed values. Follow the dot product and normalization terms in the cosine function, especially why [10,0] has the same direction as [1,0].

### 3. Inspect rejected inputs

The assertions reject a zero vector and unequal dimensions. Try a NaN coordinate as another invalid input. A production implementation must also follow its embedding model's metric contract.

### 4. Compare a fourth direction

Add [1,1]. Its cosine with [1,0] is approximately 0.7071. Use a numeric tolerance in your assertion instead of exact equality for the rounded value.

## Try a change

Compute raw dot products for [1,0] and [10,0]. Explain why their dot products differ even though their cosine similarities are identical.

## Check your result

The original outputs match your hand calculations, and invalid vectors are rejected rather than assigned a misleading score.

## Troubleshooting

Do not mix embeddings from different models just because they have the same dimension. Their coordinate spaces need not be compatible.

## Technical references

- [Sentence Transformers: semantic textual similarity](https://sbert.net/docs/sentence_transformer/usage/semantic_textual_similarity.html)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
