// Pure game logic — no DOM, no Canvas, no side effects.

class SnakeGame {
  constructor(cols = 20, rows = 20, random) {
    this.cols = cols;
    this.rows = rows;
    this.random = random || Math.random;
    this.reset();
  }

  reset() {
    this.snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    this.direction = { dx: 1, dy: 0 };
    this.nextDirection = { dx: 1, dy: 0 };
    this.score = 0;
    this.gameOver = false;
    this._placeFood();
  }

  getState() {
    return {
      snake: [...this.snake],
      food: { ...this.food },
      score: this.score,
      gameOver: this.gameOver,
    };
  }

  setDirection(dx, dy) {
    if (dx === -this.direction.dx && dy === -this.direction.dy) return;
    this.nextDirection = { dx, dy };
  }

  tick() {
    if (this.gameOver) return;

    this.direction = { ...this.nextDirection };
    const head = this.snake[0];
    const newHead = { x: head.x + this.direction.dx, y: head.y + this.direction.dy };

    if (newHead.x < 0 || newHead.x >= this.cols || newHead.y < 0 || newHead.y >= this.rows) {
      this.gameOver = true;
      return;
    }

    if (this.snake.some(s => s.x === newHead.x && s.y === newHead.y)) {
      this.gameOver = true;
      return;
    }

    this.snake.unshift(newHead);

    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score += 10;
      this._placeFood();
    } else {
      this.snake.pop();
    }
  }

  _placeFood() {
    const occupied = new Set(this.snake.map(s => `${s.x},${s.y}`));
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(this.random() * this.cols);
      const y = Math.floor(this.random() * this.rows);
      if (!occupied.has(`${x},${y}`)) {
        this.food = { x, y };
        return;
      }
    }
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        if (!occupied.has(`${x},${y}`)) {
          this.food = { x, y };
          return;
        }
      }
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SnakeGame };
}
