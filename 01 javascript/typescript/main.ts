import {Timer} from "./timer";

const timer = new Timer(1000);

timer.on(()=> {
    console.log("tick");
});

timer.start();

