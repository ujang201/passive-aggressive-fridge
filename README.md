# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/ujang201/passive-aggressive-fridge/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/ujang201/passive-aggressive-fridge/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

One funny passive-aggressive note a smart fridge leaves for its owner — a single line, dry, petty and specific, the sort of thing a smug appliance would put on its door screen.

## The entry

`main.ts` keeps the fridge's petty little ledger (yogurt count at breakfast vs. lunch, minutes the door hung open) and posts the one note the fridge would actually leave on display:

> I counted the yogurts: 4 at breakfast, 3 by lunch. 1 vanished while the door hung open for 9 minutes. I keep the receipts. I am the receipts.

The program writes that line to `/output/entry.txt`. It is fully deterministic — the same note on every run — and the note is 141 characters, within the 1–200 character gate.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
