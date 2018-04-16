class Timer {
    constructor(ms) {
        this.ms = ms;
        this.listeners = [];
    }

    on(listener) {
        this.listeners.push(listener);
    }

    start() {
        console.log(this);

        setInterval(() => {
            console.log(this);

            for(const listener of this.listeners) {
                listener();
            }
        }, this.ms);
    }
}

const timer = new Timer(1000);

timer.on(() => {
    //console.log("tick");
});

timer.start();

function doSomething(timer) {
}

