import Player from './Player.js';

const player = new Player(10, 10);
const ctx = document.getElementById('canvas').getContext('2d');
let RAF;

function loop() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  player.draw(ctx);
  player.update();
  RAF = requestAnimationFrame(loop);
}

function keyHandler(e) {
  const keyState = e.type === 'keydown';
  console.log(e.keyCode)
  // Up upArrow / W / Z
  if (e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87) player.movement.UP = keyState;
  // Right (rightArrow / D)
  if (e.keyCode == 39 || e.keyCode == 68) player.movement.RIGHT = keyState;
  // Down (downArrow / S)
  if (e.keyCode == 40 || e.keyCode == 83) player.movement.DOWN = keyState;
  // Left (leftArrow / A / Q)
  if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81) player.movement.LEFT = keyState;
  // spacebar
  // if (e.keyCode === 32)
}

window.addEventListener('load', () => {
  RAF = requestAnimationFrame(loop);
});
window.addEventListener('keydown', keyHandler);
window.addEventListener('keyup', keyHandler);
