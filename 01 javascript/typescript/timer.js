"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer(ms) {
        this.ms = ms;
        this.listeners = [];
    }
    Timer.prototype.on = function (listener) {
        this.listeners.push(listener);
    };
    Timer.prototype.start = function () {
        var _this = this;
        console.log(this);
        setInterval(function () {
            console.log(_this);
            for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener();
            }
        }, this.ms);
    };
    return Timer;
}());
exports.Timer = Timer;
