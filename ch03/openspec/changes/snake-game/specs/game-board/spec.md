## ADDED Requirements

### Requirement: Canvas game board renders
The game SHALL render a grid-based playing field using the Canvas 2D API with a fixed cell size and board dimensions.

#### Scenario: Board renders on load
- **WHEN** the page loads
- **THEN** a canvas element displays a rectangular grid with the snake in starting position and one food item on the board

#### Scenario: Board redraws each tick
- **WHEN** the game loop ticks
- **THEN** the canvas clears and redraws all cells — background, snake segments, and food
