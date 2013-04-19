function Controls() {
    this.listeners = Array.prototype.slice.call(arguments, 0);
    var _this = this;
    document.body.addEventListener('keydown', function(event) {
        _this.handle(event.keyCode);
    });
}

Controls.prototype.add = function(listener) {
    this.listeners.push(listener);
};

Controls.prototype.remove = function(toRemove) {
    this.listeners = this.listeners.filter(function(listener) {
        return toRemove !== listener;
    });
};

Controls.prototype.call = function(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    this.listeners.map(function(listener) {
        listener[method].apply(listener, args);
    });
};

Controls.prototype.handle = function(code) {
    this.call('press', code);
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

Controls._instance = null;

Controls.get = function() {
    if (this._instance == null) {
        this._instance = new Controls();
    }
    return this._instance;
};
