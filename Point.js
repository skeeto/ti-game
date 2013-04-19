function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    } else if (typeof x === 'string') {
        var p = (null, /(\d+) (\d+)/.exec(x).slice(1).map(parseFloat));
        this.x = p[0];
        this.y = p[1];
    } else {
        this.x = x;
        this.y = y;
    }
    return this;
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

Point.prototype.equals = function(point) {
    return point.x === this.x && point.y === this.y;
};
