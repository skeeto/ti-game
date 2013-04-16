function Snake(display) {
    Game.call(this, display);
    this.framerate = 10;
    this.parts = [Point.random()];
    this.dir = Snake.dirs[rand(Snake.dirs.length)];
    this.map = {};
}

Snake.prototype = Object.create(Game.prototype);
Snake.prototype.constructor = Snake;

Snake.dirs = [Point(-1, 0), Point(0, -1), Point(1, 0), Point(0, 1)];

Snake.prototype.step = function() {
    this.count++;
    this.parts.unshift(this.parts[0].add(this.dir));
    this.display.set(this.parts.pop(), 0);
    this.parts.forEach(function(part) {
        this.display.set(part, 3);
    });
};

Snake.prototype.inBounds = function(point) {
    return this.map(point);
};
