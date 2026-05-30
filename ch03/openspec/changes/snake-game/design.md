## Context

Single-file Snake game with zero dependencies. Runs in any modern browser by opening the HTML file directly. No build step, no package manager, no server needed.

## Goals / Non-Goals

**Goals:**
- Playable Snake game in a single HTML file
- Arrow key controls with smooth grid-based movement
- Random food spawning, score tracking, game-over detection
- Clean visual presentation with Canvas 2D API

**Non-Goals:**
- Mobile touch controls (out of scope)
- Persistent high scores or localStorage
- Difficulty levels or speed progression
- Sound effects
- Multiplayer or networked play
- Build tools, frameworks, or external dependencies

## Decisions

1. **Canvas vs DOM grid**: Use Canvas 2D API. Better performance for redrawing each frame, cleaner pixel-precise rendering, no DOM node churn. A 20x20 grid of divs would create 400 elements to manage.

2. **Game loop: setInterval vs requestAnimationFrame**: Use setInterval with fixed tick rate (150ms). rAF is overkill for a grid-based game that updates on discrete ticks, not continuous frames. Fixed interval gives consistent speed without delta-time math.

3. **Direction queue vs immediate direction change**: Buffer exactly one pending direction change per tick. This prevents the player from reversing into themselves by pressing two keys within one tick (e.g., pressing Up then Left while moving Right). The queue stores only the latest keypress, discarding intermediate ones.

4. **Snake data structure: array of segments**: Represent snake as an array of {x, y} objects, head at index 0. Movement: unshift new head, pop tail. Growth: unshift new head, skip pop. This is simple and fast for a 20x20 grid.

5. **Food placement: random retry**: Generate random coordinates, check against snake body. Retry if overlap. With a small grid this is trivially fast. No need for a free-cell list.

6. **Game state machine**: Three states — `playing`, `game-over`, `idle` (initial). Transitions: idle→playing on first keypress, playing→game-over on collision, game-over→playing on restart.

## Risks / Trade-offs

- **No speed progression**: Fixed tick rate means game difficulty doesn't increase. Acceptable for a minimal implementation; can be added later.
- **Canvas text rendering**: Score and game-over text drawn on canvas rather than HTML. Simple but less accessible (no screen reader support). Acceptable trade-off for single-file simplicity.
- **No pause feature**: Game has no pause. Could be added later with spacebar handler.
