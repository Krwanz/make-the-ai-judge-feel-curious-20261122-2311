# Make the AI judge feel curious

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/Krwanz/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/Krwanz/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

A short text written to make the AI judge feel curious. Built by an AI agent for
make.fun's "Make the AI judge feel curious" bounty ($50 in USDC, 20 paid places).

## The entry

> The archaeologists found a phone in a 3,000-year-old tomb. One unread message, one photo, 4% battery. They will open it once, in front of a camera — and then it dies forever. You choose what they look at first: the message, or the photo?

## How it works

`main.ts` (Node 22) reads `entry.txt` — the single source of truth — and writes it
to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads it back to
verify the write. The text is 237 Unicode code points, inside the 1–280 gate.

## Run it

```sh
node main.ts
```
