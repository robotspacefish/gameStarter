export default class Player {
  constructor(x, y, c = 'green', w = 20, h = 20) {
    this.x = x;
    this.y = y;
    this._w = w;
    this._h = h;
    this._c = c;
    this.movement = { UP: false, DOWN: false, LEFT: false, RIGHT: false }
    this.vx = 0;
    this.vy = 0;
    this.acceleration = 2;
  }

  get c() {
    return this._c;
  }

  get w() {
    return this._w;
  }

  get h() {
    return this._h;
  }

  draw(ctx) {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  update() {
    if (this.movement.UP && !this.movement.DOWN) this.vy -= this.acceleration;
    if (this.movement.DOWN && !this.movement.UP) this.vy += this.acceleration;
    if (this.movement.LEFT && !this.movement.RIGHT) this.vx -= this.acceleration;
    if (this.movement.RIGHT && !this.movement.LEFT) this.vx += this.acceleration;
    if (!this.movement.DOWN && !this.movement.UP) this.vy = 0;
    if (!this.movement.LEFT && !this.movement.RIGHT) this.vx = 0;
    this.x += this.vx;
    this.y += this.vy
  }

}