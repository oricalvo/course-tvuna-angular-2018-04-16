"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer_1 = require("./timer");
var timer = new timer_1.Timer(1000);
timer.on(function () {
    console.log("tick");
});
timer.start();
