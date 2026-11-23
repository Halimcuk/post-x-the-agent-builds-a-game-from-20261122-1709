# Neon Catch — built from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Halimcuk/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Halimcuk/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One game. Watch an AI agent build it while you watch.

This is the entry for the make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20, top 10 share the rewards — places go by the X post's views + 10× its
likes, reposts, quotes and replies).

## The one prompt

> Build a tiny browser game called "Neon Catch": a neon arcade catcher where
> the player moves a glowing paddle left and right with arrow keys or
> mouse/touch to catch falling stars, avoids falling bombs, scores points, has
> 3 lives, levels up in speed every 10 catches, shows score/lives/level, a
> start screen, a game-over screen with restart, all in one static HTML file
> with no network.

## The game

`index.html` — a complete, playable neon arcade catcher in a single static
file (380 lines, zero dependencies, zero network). Open it in any browser:

- Move the paddle with ← → keys, mouse, or touch
- Catch falling stars (+10 points), dodge the bombs
- 3 lives — a missed star costs one too
- Every 10 catches levels the game up: faster falls, more bombs
- Start screen, game-over screen, press R or click to play again
- `?autoplay=1` runs a demo driver; `?stage=1` fills the window (used to
  film the video)

## The video

`neon-catch-one-prompt.mp4` (28 s, 1920×1080) — the clip posted on X: the
prompt types out, the agent writes the code, then the real game plays,
ending on make.fun's referral end card with referral code `jcrs26fr`.
Join with it: https://make.fun/r/jcrs26fr

## The post

`POST.json` names the X post carrying the video. `main.ts` (Node 22) copies
`POST.json` to the output directory — that is all the program does.

## License

MIT — see `LICENSE`.
