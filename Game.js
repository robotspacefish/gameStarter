import Player from './Player.js';

export default class Game {
  constructor(ctx, width = 800, height = 600) {
    this._ctx = ctx;
    this.player = new Player(10, 10);
    this.RAF;

    // logical
    this.width = width;
    this.height = height;
    this.maxWidth = this.width;
    this.maxHeight = this.height;

    // visual
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;

    this.resize();
    this.loop();
  }

  get ctx() {
    return this._ctx;
  }

  loop() {
    console.log('looping')
    this.draw();
    this.update();
    this.RAF = requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.draw(this.ctx, this.width, this.height);
  }

  update() {
    this.player.update(this.width, this.height);
  }

  resize() {
    let cWidth = window.innerWidth,
      cHeight = window.innerHeight;

    const nativeRatio = this.width / this.height,
      browserWindowRatio = cWidth / cHeight;

    if (browserWindowRatio > nativeRatio) {
      cHeight = Math.floor(cHeight * 0.9);
      cWidth = Math.floor(cHeight * nativeRatio);
    } else {
      cWidth = Math.floor(cWidth * 0.9);
      cHeight = Math.floor(cWidth / nativeRatio)
    }

    this.ctx.canvas.style.width = `${cWidth}px`;
    this.ctx.canvas.style.height = `${cHeight}px`;

    this.ctx.enableImageSmoothing = false;
  }
}