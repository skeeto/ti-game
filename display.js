function Display(context) {
    this.context = context;
    this.width = context.canvas.width;
    this.height = context.canvas.height;
    this.scale = this.width / Display.WIDTH;
    this.clear();
}

Display.WIDTH = 96;
Display.HEIGHT = 64;
Display.DEPTH = 4;
Display.COLORS = ['white', 'lightgray', ' gray' ,'black'];

Display.prototype.clear = function() {
    this.context.fillStyle = Display.COLORS[0];
    this.context.fillRect(0, 0, this.width, this.height);
};

Display.prototype.set = function(point, color) {
    var scale = this.scale;
    this.context.fillStyle = Display.COLORS[color];
    this.context.fillRect(scale * point.x, scale * point.y, scale, scale);
};

Display.prototype.random = function() {
    for (var y = 0; y < Display.HEIGHT; y++) {
        for (var x = 0; x < Display.WIDTH; x++) {
            this.set(x, y, ~~(Math.random() * Display.DEPTH));
        }
    }
};
