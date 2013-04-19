function Snake(display) {
    Game.call(this, display);
    this.map = new Map().draw(this.display);
    this.framerate = 10;
    do {
        var start = Point.random();
    } while (this.map.isSolid(start));
    this.parts = [start];
    this.dir = Snake.dirs[rand(Snake.dirs.length)];
    this.nextdir = this.dir;
    this.length = 3;
}

Snake.prototype = Object.create(Game.prototype);
Snake.prototype.constructor = Snake;

Snake.LEFT = Point(-1, 0);
Snake.RIGHT = Point(1, 0);
Snake.UP = Point(0, -1);
Snake.DOWN = Point(0, 1);
Snake.dirs = [Snake.LEFT, Snake.RIGHT, Snake.UP, Snake.DOWN];

Snake.prototype.addFood = function(point) {
    if (!this.map.isSolid(point)) {
        this.map.set(point, Map.FOOD);
        this.map.draw(this.display);
    }
};

Snake.prototype.isSnake = function(point) {
    for (var i = 0; i < this.parts.length; i++) {
        if (point.equals(this.parts[i])) {
            return true;
        }
    }
    return false;
};

Snake.prototype.step = function() {
    this.count++;
    if (this.count < 10 || rand(20) === 0) {
        this.addFood(Point.random());
    }

    // Check collisions
    this.dir = this.nextdir;
    this.nextdir = this.dir;
    var head = this.parts[0].add(this.dir);
    if (this.map.isSolid(head) || this.isSnake(head)) {
        this.gameOver();
    } else if (this.map.isFood(head)) {
        this.length++;
    }

    // Update
    this.parts.unshift(head);
    var display = this.display;
    if (this.parts.length > this.length) {
        display.set(this.parts.pop(), 0);
    }
    this.parts.forEach(function(part) {
        display.set(part, 3);
    });
};

Snake.prototype.left = function() {
    if (this.dir !== Snake.RIGHT) this.nextdir = Snake.LEFT;
};

Snake.prototype.right = function() {
    if (this.dir !== Snake.LEFT) this.nextdir = Snake.RIGHT;
};

Snake.prototype.up = function() {
    if (this.dir !== Snake.DOWN) this.nextdir = Snake.UP;
};

Snake.prototype.down = function() {
    if (this.dir !== Snake.UP) this.nextdir = Snake.DOWN;
};

Snake.prototype.gameOver = function() {
    this.stop();
};
