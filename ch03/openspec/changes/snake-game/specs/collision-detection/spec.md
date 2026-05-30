## ADDED Requirements

### Requirement: Wall collision ends game
The system SHALL detect when the snake's head moves outside the board boundaries and transition to game-over state.

#### Scenario: Snake hits top wall
- **WHEN** the snake's head moves above row 0
- **THEN** the game ends and a game-over overlay appears

#### Scenario: Snake hits bottom wall
- **WHEN** the snake's head moves below the last row
- **THEN** the game ends and a game-over overlay appears

#### Scenario: Snake hits left wall
- **WHEN** the snake's head moves left of column 0
- **THEN** the game ends and a game-over overlay appears

#### Scenario: Snake hits right wall
- **WHEN** the snake's head moves right of the last column
- **THEN** the game ends and a game-over overlay appears

### Requirement: Self-collision ends game
The system SHALL detect when the snake's head overlaps any segment of its own body and transition to game-over state.

#### Scenario: Snake runs into itself
- **WHEN** the snake's head moves into a cell occupied by any body segment (excluding the tail segment that will be vacated this tick)
- **THEN** the game ends and a game-over overlay appears
