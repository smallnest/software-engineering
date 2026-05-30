## ADDED Requirements

### Requirement: Food spawns at random position
The system SHALL place food at a random unoccupied cell on the game board.

#### Scenario: Initial food placement
- **WHEN** the game starts
- **THEN** one food item appears at a random position not occupied by the snake

#### Scenario: Food respawn after eaten
- **WHEN** the snake's head reaches the food position
- **THEN** the food disappears from that cell and a new food item appears at a different random position not occupied by the snake

#### Scenario: Food never spawns on snake
- **WHEN** food is placed at any time
- **THEN** its coordinates are guaranteed not to overlap with any segment of the snake body
