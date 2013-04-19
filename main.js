window.addEventListener('load', function() {
    var context = document.getElementById('display').getContext('2d');
    var display = new Display(context);
    //var game = new Snake(display);
    var game = new VideoGame(display, 'opencl.webm');
    var controls = new Controls(game);
    game.run();
});
