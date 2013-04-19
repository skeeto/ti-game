function VideoGame(display, url) {
    Game.call(this, display);
    this.video = document.createElement('video');
    this.video.src = url;
    this.video.setAttribute('loop', true);
    this.video.play();
    this.background = document.createElement('canvas').getContext('2d');
    this.background.canvas.width = Display.WIDTH;
    this.background.canvas.height = Display.HEIGHT;
}

VideoGame.prototype = Object.create(Game.prototype);
VideoGame.prototype.constructor = VideoGame;

VideoGame.prototype.step = function() {
    var width = Display.WIDTH, height = Display.HEIGHT;
    this.background.drawImage(this.video, 0, 0, width, height);
    var data = this.background.getImageData(0, 0, width, height).data;
    for(var i = 0; i < data.length; i += 4) {
        var r = data[i],
            g = data[i+1],
            b = data[i+2];
        var brightness = (3 * r + 4 * g + b) >>> 3;
        var point = Point((i / 4) % width, ~~((i / 4) / width));
        this.display.set(point, ~~((brightness / 255) * 4));
    }
};
