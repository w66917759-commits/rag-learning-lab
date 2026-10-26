# RAG Learning Lab

Built by **[SaveMyToken](https://savemytoken.com)**.

Related project: **[SI-API](https://siapi.ai)**.

Six small, runnable exercises for understanding retrieval-augmented generation and vector search. Each lab includes complete JavaScript, expected output, an explanation, and a change to try. Everything runs locally without dependencies, API keys, or a model service.

## Start here

Use Node.js 22 or newer, open a terminal in this directory, and run:

```sh
node exercises/chunking.mjs
npm test
```

No installation or build step is required. `npm test` runs all six labs, including their built-in assertions, and checks their output against the recorded expected results.

## Labs

| Lab | What to investigate |
| --- | --- |
| [Chunking](lessons/chunking.md) | Keep a rule and its exception together |
| [Rank fusion](lessons/fusion.md) | Combine two supplied rankings with reciprocal rank fusion |
| [Evidence](lessons/evidence.md) | Distinguish a valid source ID from a supported claim |
| [Evaluation](lessons/evaluation.md) | Compare precision and recall at different retrieval depths |
| [Vector similarity](lessons/cosine.md) | Calculate cosine similarity with small example vectors |
| [Filtering](lessons/filtering.md) | Compare filtering before and after top-K selection |

## How to learn

1. Read the lab and predict its output.
2. Run the complete script and compare the result.
3. Change the example as suggested in the lab.
4. Explain what the assertions establish and what still needs a real application test.

These are deterministic teaching exercises, not a production RAG service, embedding benchmark, deployed agent, or security guarantee. Rankings and vectors are supplied toy data. The citation lab checks IDs; a valid ID does not prove the answer's meaning. The filtering example does not replace application authorization.

For complete tutorials and learning paths, visit [SaveMyToken](https://savemytoken.com).

## Contents and review dates

- `exercises/`: standalone Node.js scripts.
- `lessons/`: explanations, expected output, exercises, and primary references.
- `exercises.json`: lab IDs, paths, expected output, and editorial review dates.
- `test/`: regression checks for the shipped examples.

Exported on 2026-10-06. Review dates are retained from the source lessons; exporting does not reverify third-party APIs. References link to their original publishers and are not copied or relicensed.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md). JavaScript and project configuration are licensed under [MIT](LICENSE). Original explanatory lesson text and README prose are licensed under [CC BY 4.0](LICENSE-CONTENT), with attribution to [SaveMyToken](https://savemytoken.com). Linked third-party materials retain their own terms.
