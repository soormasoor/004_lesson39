"use strict";
class Timer {
  constructor() {
    this.intervalId = null;
    this.stopped = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  show() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  update() {
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
  }

  start() {
    if (!this.stopped) {
      this.intervalId = setInterval(() => {
        this.seconds++;
        this.update();
        this.show();
      }, 1000);
    }
  }

  pause() {
    clearInterval(this.intervalId);
    console.log("Paused");
  }

  stop() {
    this.pause();
    this.stopped = true;
    console.log("Stopped");
  }

  reset() {
    this.constructor();
  }
}

const timer = new Timer();

timer.seconds = 55;
timer.start();

setTimeout(() => {
  timer.pause();
}, 5000);

setTimeout(() => {
  timer.stop();
}, 6000);

setTimeout(() => {
  timer.start();
}, 7000);

setTimeout(() => {
  timer.show();
  timer.reset();
  timer.show();
}, 9000);
