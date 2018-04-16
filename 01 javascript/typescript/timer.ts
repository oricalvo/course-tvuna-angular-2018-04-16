export class Timer {
    ms;
    listeners;

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
