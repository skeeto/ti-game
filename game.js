function Game(display) {
    this.display = display;
    this.count = 0;
    this.framerate = 30;
    this.id = null;
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
    if (this.id == null) {
        this.id = setInterval(this.runner(), 1000 / this.framerate);
        return true;
    } else {
        return false;
    }
};

Game.prototype.stop = function() {
    if (this.id != null) {
        clearInterval(this.id);
        this.id = null;
        return true;
    } else {
        return false;
    }
};

Game.prototype.left = function() {
    console.log('input: left');
};
Game.prototype.up = function() {
    console.log('input: up');
};
Game.prototype.right = function() {
    console.log('input: right');
};
Game.prototype.down = function() {
    console.log('input: down');
};
