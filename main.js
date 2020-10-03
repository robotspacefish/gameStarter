import Game from './Game.js';

let game;

function keyHandler(e) {
  const keyState = e.type === 'keydown';
  // Up upArrow / W / Z
  if (e.keyCode == 38 || e.keyCode == 90 || e.keyCode == 87) game.player.movement.UP = keyState;
  // Right (rightArrow / D)
  if (e.keyCode == 39 || e.keyCode == 68) game.player.movement.RIGHT = keyState;
  // Down (downArrow / S)
  if (e.keyCode == 40 || e.keyCode == 83) game.player.movement.DOWN = keyState;
  // Left (leftArrow / A / Q)
  if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81) game.player.movement.LEFT = keyState;
  // spacebar
  if (e.keyCode === 32) console.log(game)
}

window.addEventListener('load', () => {
  game = new Game(document.getElementById('canvas').getContext('2d'));
}, false);

window.addEventListener('resize', () => {
  game.resize();
}, false);
window.addEventListener('keydown', keyHandler);
window.addEventListener('keyup', keyHandler);
