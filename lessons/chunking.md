# Keep a rule and its exception together

[All labs](../README.md) · [SaveMyToken](https://savemytoken.com)

Split a tiny returns policy two ways, then check which chunks contain the complete answer.

## Outcome

A repeatable check for evidence lost at chunk boundaries.

## Scope

This lab tests text boundaries with exact string checks. It does not run embeddings, retrieval, or an LLM.

## Concept

A useful chunk contains the evidence needed to answer a question. In this example, the 30-day return window is incomplete without the restriction on opened items. Inspecting chunk length alone would miss that failure.

## Run the exercise

From the repository root, with Node.js 22 or newer:

```sh
node exercises/chunking.mjs
```

[Read the complete code](../exercises/chunking.mjs). No dependencies, API key, network access, or model calls are required.

Expected output:

```text
Fixed chunks preserve rule: false
Paragraph chunks preserve rule: true
```

## Walkthrough

### 1. Read the two policy paragraphs

Find the returns window and its exception in the sample code. Write down the expected answer to: Can I return an opened item after 10 days? It is not eligible under this example policy.

### 2. Run the 40-character baseline

Download the lab below and run its command. The fixed-size split separates the evidence; its complete-rule check prints false.

### 3. Inspect the paragraph split

The second splitter uses blank lines. Print structured to see the full returns paragraph. Its check prints true because both required statements survive in one chunk.

### 4. Test the boundary again

Change width to 80 and update the baseline assertion to your predicted result. Then add a long paragraph. A production splitter also needs a size limit and a fallback for oversized sections; preserving paragraphs alone is not enough.

## Try a change

Move the exception into a separate paragraph. Both simple strategies can now lose the relationship. Add a parent section or merge the two related paragraphs, then rerun the complete-rule check.

## Check your result

You can show the exact chunk containing both the rule and exception, and explain when a paragraph-only splitter fails.

## Troubleshooting

An assertion failure after changing the sample can be expected: first inspect the chunks, then update the expected result. Do not remove the check just to make the script pass.

## Technical references

- [LangChain: recursive text splitting](https://docs.langchain.com/oss/python/integrations/splitters/recursive_text_splitter)
- [LangChain: retrieval and RAG](https://docs.langchain.com/oss/python/deepagents/retrieval)

Editorial review carried from the source: 2026-10-05. Exported 2026-10-06. Exporting is not a new verification of current product behavior.
