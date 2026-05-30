## Why

The task is to build a classic Snake web game as a pure frontend implementation. This serves as a self-contained interactive demo — no build tools, no frameworks, no server. Single HTML file that runs anywhere a browser does.

## What Changes

- Add a single-file Snake game (`snake.html`) with full game loop
- Arrow key controls for snake direction
- Random food spawning on the game board
- Snake grows in length and score increases on eating food
- Game over detection on wall collision or self-collision
- Visual rendering via Canvas or DOM-based grid
- Score display and restart mechanism

## Capabilities

### New Capabilities

- `game-board`: Renders a grid-based playing field using Canvas 2D API
- `snake-movement`: Arrow key input handling with direction queue to prevent 180° reversals
- `food-spawning`: Random food placement avoiding the snake body
- `collision-detection`: Wall and self-collision checks with game-over state
- `score-system`: Score tracking and display with game-over overlay

### Modified Capabilities

<!-- None — new project, no existing specs to modify -->

## Impact

- New file: `snake.html` at project root
- No dependencies, no APIs, no existing code affected
- Runs in any modern browser, zero install
