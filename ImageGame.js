function ImageGame(display, url) {
    Game.call(this, display);
    this.framerate = 10;
    this.invert = true;
    this.transparent = true;
    this.data = null;

    var img = new Image();
    img.src = url;
    img.onload = function() {
        var width = Display.WIDTH, height = Display.HEIGHT;
        var context = document.createElement('canvas').getContext('2d');
        context.canvas.width = width;
        context.canvas.height = height;
        context.drawImage(img, 0, 0);
        this.data = context.getImageData(0, 0, width, height).data;
    }.bind(this);
}

ImageGame.prototype = Object.create(Game.prototype);
ImageGame.prototype.constructor = ImageGame;

ImageGame.prototype.step = function() {
    var data = this.data;
    if (data != null) {
        var width = Display.WIDTH, height = Display.HEIGHT;
        for(var i = 0; i < data.length; i += 4) {
            var r = data[i],
                g = data[i+1],
                b = data[i+2];
            var brightness = (3 * r + 4 * g + b) >>> 3;
            if (this.invert) brightness = 255 - brightness;
            var color = ~~((brightness / 255) * 4);
            if (color > 0 || !this.transparent) {
                var point = Point((i / 4) % width, ~~((i / 4) / width));
                this.display.set(point, color);
            }
        }
    }
};
