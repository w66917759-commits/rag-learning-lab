# Check the evidence behind an answer

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Reject invented source IDs and distinguish a valid citation from a supported claim.

## Outcome

A three-case evidence checklist for supported, unsupported, and unanswered questions.

## Scope

Answers are supplied examples. The script checks citation structure; it does not generate answers or judge their meaning.

## Concept

A citation has two jobs: point to an accessible source and support the claim being made. An ID allowlist checks the first job. A separate comparison between the claim and the cited passage checks the second.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/evidence.mjs
```

[Read the complete code](../exercises/evidence.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
REVIEW SUPPORT | REJECT | ABSTAIN
```

## Walkthrough

### 1. Read the source of truth

The sample policy says unused items have 30 days and opened items are not eligible. There is no gift-card policy. Keep this short source visible during review.

### 2. Run the three cases

The valid source ID receives REVIEW SUPPORT. The invented ID receives REJECT. A declared unknown answer with no citation receives ABSTAIN.

### 3. Try a false claim with a real ID

The final assertion attaches returns-v2 to a 90-day claim. It still reaches REVIEW SUPPORT. Compare it with the passage and manually mark the claim unsupported.

### 4. Write an acceptance record

For each case record: source exists, claim supported, exceptions preserved, and unknown handled. Accept the first answer only after its claim passes all relevant checks.

## Try a change

Add an answer that gets the 30-day limit right but says opened items are eligible. Give it a real citation and explain why it must fail the support review.

## Check your result

A real source ID cannot make a false statement pass your full review; uncovered questions remain explicitly unanswered.

## Troubleshooting

Do not rename REVIEW SUPPORT to VERIFIED. For a real application, resolve IDs on the server from the retrieved, authorized source set and check the cited version.

## Technical references

- [Hugging Face: evaluating RAG](https://huggingface.co/learn/cookbook/en/rag_evaluation)
- [LangChain: retrieval and RAG](https://docs.langchain.com/oss/python/deepagents/retrieval)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
