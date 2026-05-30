## 1. HTML structure and canvas setup

- [x] 1.1 Create snake.html with basic HTML5 boilerplate (doctype, meta viewport, title)
- [x] 1.2 Add <canvas> element with id "board" and inline styles for dark background and centering
- [x] 1.3 Define game constants (BOARD_SIZE=20, CELL_SIZE=25, TICK_MS=150) in <script>

## 2. Game state and data structures

- [x] 2.1 Declare game state variables: snake array, food {x,y}, direction {x,y}, score, gameState ("idle"|"playing"|"gameover"), pendingDirection
- [x] 2.2 Write initGame() to reset snake to center of board ([{x:10,y:10},{x:9,y:10},{x:8,y:10}]), score=0, direction {x:1,y:0}, state="idle", spawn food

## 3. Rendering

- [x] 3.1 Write draw() function that clears canvas, fills background (#111), draws each snake segment (green, darker for body), draws food (red circle or rect)
- [x] 3.2 Write drawGameOver() function that renders semi-transparent overlay, "GAME OVER" text, final score, and "Press Enter to restart" prompt

## 4. Snake movement and input

- [x] 4.1 Add keydown event listener for arrow keys that sets pendingDirection (with 180° reversal check: ignore if opposite of current direction)
- [x] 4.2 Add keydown event listener for Enter key to restart from gameover state
- [x] 4.3 Write move() function: apply pendingDirection to direction, compute new head position, unshift new head to snake

## 5. Collision detection

- [x] 5.1 Write checkCollision(head): return true if head.x<0 or >=BOARD_SIZE or head.y<0 or >=BOARD_SIZE (wall collision)
- [x] 5.2 Write checkSelfCollision(head): return true if head matches any snake body segment (skip tail since it moves)

## 6. Food and scoring

- [x] 6.1 Write spawnFood(): generate random {x,y} within board bounds, retry if position overlaps snake body
- [x] 6.2 In game loop: if head matches food position, increment score by 10, call spawnFood(), skip tail removal (snake grows)

## 7. Game loop

- [x] 7.1 Write tick() function: move snake, check collisions (if collision set state="gameover"), otherwise update snake array and score, call draw()
- [x] 7.2 Wire setInterval: start tick timer on first keypress (idle→playing transition), clear and restart interval on gameover→idle transition
- [x] 7.3 Call draw() on page load to show initial board state

## 8. Polish

- [x] 8.1 Add score text rendering at top of canvas during play
- [x] 8.2 Test all edge cases: wall hits (4 sides), self-collision, rapid keypresses (direction queue), food spawn after snake fills most of board
- [x] 8.3 Verify no 180° reversals, no food-on-snake spawns, Enter restart works from gameover
