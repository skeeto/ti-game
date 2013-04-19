window.addEventListener('load', function() {
    var context = document.getElementById('display').getContext('2d');
    var display = new Display(context);
    var video = new VideoGame(display, 'opencl.webm');
    var image = new ImageGame(display, 'Snake.png');
    var title = new ComposeGame(video, image);
    var controls = new Controls(title);
    title.run();
    title.press = function() {
        title.stop();
        controls.remove(title);
        display.clear();
        var snake = new Snake(display);
        controls.add(snake);
        snake.run();
    };
});
