function ComposeGame() {
    Game.call(this, null);
    this.games = Array.prototype.slice.call(arguments, 0);
}

ComposeGame.prototype = Object.create(Game.prototype);
ComposeGame.prototype.constructor = ComposeGame;

ComposeGame.prototype.step = function() {
    this.games.forEach(function(game) {
        game.step();
    });
};
