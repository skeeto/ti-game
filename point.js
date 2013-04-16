function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    } else {
        this.x = x;
        this.y = y;
        return this;
    }
}

Point.random = function() {
    return new Point(rand(Display.WIDTH), rand(Display.HEIGHT));
};

Point.prototype.add = function(point) {
    return new Point(this.x + point.x, this.y + point.y);
};

Point.prototype.toString = function() {
    return '[Point ' + this.x + ' ' + this.y + ']';
};
