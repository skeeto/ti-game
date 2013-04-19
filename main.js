window.addEventListener('load', function() {
    var context = document.getElementById('display').getContext('2d');
    var display = new Display(context);
    //var game = new Snake(display);
    var video = new VideoGame(display, 'opencl.webm');
    var image = new ImageGame(display, 'Snake.png');
    var game = new ComposeGame(video, image);
    var controls = new Controls(game);
    game.run();
});
