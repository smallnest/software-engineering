## ADDED Requirements

### Requirement: Score tracks food eaten
The system SHALL increment the score by a fixed amount each time the snake eats food.

#### Scenario: Score increments on eating
- **WHEN** the snake's head reaches the food position
- **THEN** the score increases by 10 points

#### Scenario: Score starts at zero
- **WHEN** the game starts or restarts
- **THEN** the score is reset to 0

### Requirement: Score display visible during play
The system SHALL display the current score on screen at all times during gameplay.

#### Scenario: Score visible while playing
- **WHEN** the game is in playing state
- **THEN** the current score is rendered on the canvas

### Requirement: Game-over screen shows final score and restart prompt
The system SHALL display the final score and a restart instruction when the game ends.

#### Scenario: Game-over overlay appears
- **WHEN** the game transitions to game-over state
- **THEN** the canvas displays "Game Over" text, the final score, and a prompt to press Enter to restart

#### Scenario: Restart resets game
- **WHEN** the player presses Enter while in game-over state
- **THEN** the snake resets to starting position, score resets to 0, food respawns, and game state returns to idle
