## ADDED Requirements

### Requirement: Snake moves on arrow key input
The system SHALL respond to ArrowUp, ArrowDown, ArrowLeft, and ArrowRight keypresses to change the snake's direction.

#### Scenario: Valid direction change
- **WHEN** the player presses an arrow key that is not opposite to the current direction
- **THEN** the snake changes direction on the next tick

#### Scenario: 180-degree reversal blocked
- **WHEN** the player presses the arrow key opposite to the current direction (e.g., pressing Left while moving Right)
- **THEN** the input is ignored and the snake continues in its current direction

#### Scenario: Game starts on first valid keypress
- **WHEN** the game is in idle state and the player presses any arrow key
- **THEN** the game loop starts and the snake begins moving
