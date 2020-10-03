import Player from './Player.js';

export default class Game {
  constructor(ctx) {
    this._ctx = ctx;
    this.player = new Player(10, 10);
    this.RAF;
    this.loopCount = 0;
    this.loop();
  }

  get ctx() {
    return this._ctx;
  }

  loop() {
    this.draw();
    this.update();
    requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.player.draw(this.ctx);
  }

  update() {
    this.player.update();
  }

  resize() {
    let cWidth = window.innerWidth,
      cHeight = window.innerHeight;

    const nativeRatio = this.width / this.height,
      browserWindowRatio = cWidth / cHeight,
      SIZE = 16;

    if (browserWindowRatio > nativeRatio) {
      cHeight = Math.floor(cHeight * 0.9 * SIZE) * SIZE;
      if (cHeight > this.maxWidth) cHeight = this.maxHeight;
      cWidth = Math.floor(cHeight * nativeRatio);
    } else {
      cWidth = Math.floor(cWidth * 0.9 / SIZE) * SIZE;
      if (cWidth > this.maxWidth) cWidth = this.maxWidth;
      cHeight = Math.floor(cWidth / nativeRatio);
    }

    this.canvas.style.width = `${cWidth}px`;
    this.canvas.style.height = `${cHeight}px`;

    this.ctx.imageSmoothingEnabled = false; // remove blurring from resizing
  }
}