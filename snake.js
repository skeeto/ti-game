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

Snake.dirs = [Point(-1, 0), Point(0, -1), Point(1, 0), Point(0, 1)];

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
