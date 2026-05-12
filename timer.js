"use strict";
class Timer {
  constructor() {
    this.intervalId = null;
    this.isStopped = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  getTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  update() {
    this.seconds = this.seconds % 60;
    this.minutes += Math.floor(this.seconds / 60);

    this.minutes = this.minutes % 60;
    this.hours += Math.floor(this.minutes / 60);
  }

  start() {
    if (!this.isStopped) {
      this.intervalId = setInterval(() => {
        this.seconds++;
        this.update();
        this.getTime();
      }, 1000);
    }
  }

  pause() {
    clearInterval(this.intervalId);
    console.log("Paused");
  }

  stop() {
    this.pause();
    this.isStopped = true;
    console.log("Stopped");
  }

  reset() {
    this.intervalId = null;
    this.isStopped = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
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
  timer.getTime();
  timer.reset();
  timer.getTime();
}, 9000);
