function Snake(display) {
    Game.call(this, display);
    this.map = new Map().draw(this.display);
    this.framerate = 10;
    do {
        var start = Point.random();
    } while (this.map.isSolid(start));
    this.parts = [start];
    this.dir = Snake.dirs[rand(Snake.dirs.length)];
    this.length = 3;
}

Snake.prototype = Object.create(Game.prototype);
Snake.prototype.constructor = Snake;

Snake.LEFT = Point(-1, 0);
Snake.RIGHT = Point(1, 0);
Snake.UP = Point(0, -1);
Snake.DOWN = Point(0, 1);
Snake.dirs = [Snake.LEFT, Snake.RIGHT, Snake.UP, Snake.DOWN];

Snake.prototype.step = function() {
    this.count++;
    this.parts.unshift(this.parts[0].add(this.dir));
    if (this.parts.length > this.length) {
        this.display.set(this.parts.pop(), 0);
    }
    this.parts.forEach(function(part) {
        this.display.set(part, 3);
    });
    if (this.map.isSolid(this.parts[0])) {
        this.display.set(this.parts[0], 1);
        this.stop();
    }
};

Snake.prototype.left = function() {
    if (this.dir != Snake.RIGHT) this.dir = Snake.LEFT;
};

Snake.prototype.right = function() {
    if (this.dir != Snake.LEFT) this.dir = Snake.RIGHT;
};

Snake.prototype.up = function() {
    if (this.dir != Snake.DOWN) this.dir = Snake.UP;
};

Snake.prototype.down = function() {
    if (this.dir != Snake.UP) this.dir = Snake.DOWN;
};
