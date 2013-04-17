function Controls() {
    this.listeners = Array.prototype.slice.call(arguments, 0);
    var _this = this;
    document.body.addEventListener('keydown', function(event) {
        _this.handle(event.keyCode);
    });
}

Controls.prototype.call = function(method) {
    this.listeners.map(function(listener) {
        listener[method]();
    });
};

Controls.prototype.handle = function(code) {
    switch(code) {
    case 37:
        this.call('left');
        break;
    case 38:
        this.call('up');
        break;
    case 39:
        this.call('right');
        break;
    case 40:
        this.call('down');
        break;
    }
};
