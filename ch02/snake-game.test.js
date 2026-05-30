const { describe, it } = require('node:test');
const assert = require('node:assert');
const { SnakeGame } = require('./snake-game.js');

describe('SnakeGame', () => {
  it('moves snake one grid cell per tick in current direction', () => {
    const game = new SnakeGame(20, 20);
    const before = game.getState().snake;
    // Initially heading right, head at (10,10), body at (9,10),(8,10)

    game.tick();
    const after = game.getState().snake;

    assert.deepStrictEqual(after[0], { x: 11, y: 10 }, 'head moved right');
    assert.deepStrictEqual(after[1], { x: 10, y: 10 }, 'old head becomes second segment');
    assert.deepStrictEqual(after[2], { x: 9, y: 10 }, 'tail follows');
    assert.strictEqual(after.length, 3, 'length stays 3 when no food eaten');
  });

  it('eating food grows snake and adds 10 points', () => {
    const game = new SnakeGame(3, 3);
    // snake starts at (10,10),(9,10),(8,10) on 3x3 grid — too small
    // We inject via manual setup: tiny grid, place food ahead
    game.snake = [{ x: 0, y: 0 }, { x: 0, y: 1 }];
    game.direction = { dx: 1, dy: 0 };
    game.nextDirection = { dx: 1, dy: 0 };
    game.food = { x: 1, y: 0 };
    game.score = 0;
    game.gameOver = false;
    game.cols = 3;
    game.rows = 3;

    game.tick();

    const state = game.getState();
    assert.strictEqual(state.snake.length, 3, 'snake grows by 1 (from 2 to 3)');
    assert.strictEqual(state.score, 10, 'score increases by 10');
    assert.notDeepStrictEqual(state.food, { x: 1, y: 0 }, 'new food placed');
  });

  it('hitting wall sets gameOver', () => {
    const game = new SnakeGame(4, 4);
    game.snake = [{ x: 3, y: 0 }];
    game.direction = { dx: 1, dy: 0 };
    game.nextDirection = { dx: 1, dy: 0 };

    game.tick();

    assert.strictEqual(game.getState().gameOver, true);
  });

  it('hitting own body sets gameOver', () => {
    const game = new SnakeGame(5, 5);
    game.snake = [
      { x: 1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ];
    game.direction = { dx: 0, dy: 1 };
    game.nextDirection = { dx: 0, dy: 1 };
    // head at (1,0) going down → (1,1) which is body

    game.tick();

    assert.strictEqual(game.getState().gameOver, true);
  });

  it('rejects reverse direction', () => {
    const game = new SnakeGame(20, 20);
    // heading right initially; try to go left
    game.setDirection(-1, 0);
    game.tick();
    const state = game.getState();
    assert.deepStrictEqual(state.snake[0], { x: 11, y: 10 }, 'still moves right after reverse attempt');
  });

  it('reset restores initial state', () => {
    const game = new SnakeGame(20, 20);
    // mess up everything
    game.snake = [{ x: 5, y: 5 }];
    game.score = 999;
    game.gameOver = true;
    game.food = { x: 0, y: 0 };
    game.direction = { dx: -1, dy: 0 };
    game.nextDirection = { dx: -1, dy: 0 };

    game.reset();

    const state = game.getState();
    assert.strictEqual(state.gameOver, false, 'gameOver cleared');
    assert.strictEqual(state.score, 0, 'score reset');
    assert.strictEqual(state.snake.length, 3, 'snake back to 3 segments');
    assert.deepStrictEqual(state.snake[0], { x: 10, y: 10 }, 'head at start position');
    assert.notDeepStrictEqual(state.food, { x: 0, y: 0 }, 'new food placed');
  });

  it('uses injected random function for deterministic food placement', () => {
    const seeded = () => 0;
    const game = new SnakeGame(20, 20, seeded);

    const state = game.getState();
    assert.deepStrictEqual(state.food, { x: 0, y: 0 }, 'seeded random(0) → food at (0,0)');
  });
});
