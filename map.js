function Map() {
    this.data = {};
    for (var y = 0; y < Display.HEIGHT; y += Display.HEIGHT - 1) {
        for (var x = 0; x <= Display.WIDTH; x++) {
            this.data[Point(x, y)] = Map.WALL;
        }
    }
    for (x = 0; x < Display.WIDTH; x += Display.WIDTH - 1) {
        for (y = 0; y <= Display.HEIGHT; y++) {
            this.data[Point(x, y)] = Map.WALL;
        }
    }
}

Map.OPEN = 0;
Map.FOOD = 1;
Map.WALL = 2;

Map.prototype.isSolid = function(point) {
    return this.data[point] === Map.WALL;
};

Map.prototype.isFood = function(point) {
    return this.data[point] === Map.FOOD;
};

Map.prototype.draw = function(display) {
    var _this = this;
    Object.keys(this.data).map(function(key) {
        display.set(Point(key), _this.data[key]);
    });
    return this;
};

Map.prototype.set = function(point, value) {
    this.data[point] = value;
};
