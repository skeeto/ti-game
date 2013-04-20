function rand(n) {
    return ~~(Math.random() * n);
}

Array.prototype.random = function() {
    return this[~~(this.length * Math.random())];
};
