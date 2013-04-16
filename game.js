function Game(display) {
    this.display = display;
    this.count = 0;
    this.framerate = 30;
}

Game.prototype.step = function() {
    this.count++;
    this.display.set(Point.random(), ~~(Math.random() * Display.DEPTH));
};

Game.prototype.runner = function() {
    var _this = this;
    return function() {
        _this.step();
    };
};

Game.prototype.run = function() {
    setInterval(this.runner(), 1000 / this.framerate);
};
