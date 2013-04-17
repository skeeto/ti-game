var display = new Display(document.getElementById('display').getContext('2d'));
var game = new Snake(display);
var controls = new Controls(game);
game.run();
