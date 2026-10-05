# Measure what Top K changes

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Calculate precision and recall on a tiny labeled retrieval result before changing your pipeline.

## Outcome

A three-row evaluation showing the tradeoff between evidence coverage and extra context.

## Scope

The labels and rankings are a teaching fixture. The results are arithmetic examples, not a model benchmark or a production measurement.

## Concept

The example question needs both a rule and an exception. Precision is relevant retrieved items divided by retrieved items; recall is relevant retrieved items divided by all labeled relevant items. They describe retrieval, not the truthfulness of a final answer.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/evaluation.mjs
```

[Read the complete code](../exercises/evaluation.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
K=1 precision=1.00 recall=0.50
K=2 precision=0.50 recall=0.50
K=3 precision=0.67 recall=1.00
```

## Walkthrough

### 1. Fix the relevance labels

Mark rule and exception as relevant; shipping is irrelevant to this question. Do this before changing K, so the target cannot move with your result.

### 2. Run K from one to three

At K=1 precision is 1.00 but recall is only 0.50. At K=3 recall reaches 1.00 while precision drops to 0.67 because shipping is included.

### 3. Check the denominator

For K=2, only one of the two retrieved items is relevant, so precision is 1/2. There are two relevant items overall, so recall is also 1/2.

### 4. Build a small comparison sheet

Add several representative questions with their relevant document IDs. Compare two configurations on the same questions. Record per-question failures before averaging, then review the answers and measure latency separately.

## Try a change

Move exception to second place. Predict precision and recall at K=2, then update the fixture and assertions. Explain why better ordering can reduce the context needed.

## Check your result

You can compute all three rows by hand and identify a case where perfect precision still misses required evidence.

## Troubleshooting

For a query with no relevant documents, recall has a zero denominator. Evaluate correct abstention separately instead of dividing by zero. This lab uses only nonempty labels and result sets.

## Technical references

- [Hugging Face: evaluating RAG](https://huggingface.co/learn/cookbook/en/rag_evaluation)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
