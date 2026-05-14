"use strict";
class Timer {
  constructor(startTime = new Date()) {
    if (!(startTime instanceof Date)) {
      throw new TypeError("startTime must be an instance of Date object");
    }

    this.startTime = startTime;
    this.finalTime;
    this.isStopped = false;
  }

  static displayTime(start, final) {
    const diff = final - start;
    const millis = String(diff % 1000).padStart(3, "0");
    const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
    const minutes = String(Math.floor(diff / (1000 * 60)) % 60).padStart(
      2,
      "0",
    );
    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}.${millis}`;
  }

  getTime() {
    if (!this.finalTime) {
      return `00:00:00.000`;
    }
    return Timer.displayTime(this.startTime, this.finalTime);
  }

  start() {
    if (this.isStopped || this.intervalId) {
      return this;
    }

    if (!this.startTime) {
      this.startTime = new Date();
    }

    this.intervalId = setInterval(() => {
      this.finalTime = new Date();
    }, 1000);

    return this;
  }

  pause() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    return this;
  }

  stop() {
    this.pause();
    this.isStopped = true;
    return this;
  }

  reset() {
    this.startTime = undefined;
    this.finalTime = undefined;
    this.isStopped = false;
    this.intervalId = undefined;
  }
}

const timer = new Timer();

timer.start();

setInterval(() => {
  console.log(timer.getTime());
}, 1000);
