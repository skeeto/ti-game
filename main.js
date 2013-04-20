window.addEventListener('load', function() {
    var videos = ['pycube.webm', 'opencl.webm'];
    var context = document.getElementById('display').getContext('2d');
    var display = new Display(context);
    var video = new VideoGame(display, videos.random());
    var image = new ImageGame(display, 'Snake.png');
    var title = new ComposeGame(video, image);
    title.press = function() {
        if (this.isRunning()) {
            this.stop();
            display.clear();
            var snake = new Snake(display, this);
            snake.run();
        }
    };
    title.run();
});
