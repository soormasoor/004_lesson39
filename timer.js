"use strict";
class Timer {
  constructor(totalSeconds = 0) {
    this.intervalId = null;
    this.isStopped = false;
    this.totalSeconds = 0;
  }

  makeCountDown() {
    return new CountDown(this.getSeconds);
  }

  getHoursAndMinutes() {
    return {
      hours: Math.floor(this.totalSeconds / 3600),
      minutes: Math.floor(this.totalSeconds / 60),
      seconds: this.totalSeconds % 60,
    };
  }

  getTime() {
    const { hours, minutes, seconds } = this.getHoursAndMinutes();

    console.log(`${hours}:${minutes}:${seconds}`);
  }

  update() {
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
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
    this.intervalId = null;
    console.log("Paused");
  }

  stop() {
    this.pause();
    this.isStopped = true;
    console.log("Stopped");
  }

  reset() {
    this.stop();
    this.isStopped = false;
    this.totalSeconds = 0;
  }
}

// const timer = new Timer();

// timer.seconds = 55;
// timer.start();

// setTimeout(() => {
//   timer.pause();
// }, 5000);

// setTimeout(() => {
//   timer.stop();
// }, 6000);

// setTimeout(() => {
//   timer.start();
// }, 7000);

// setTimeout(() => {
//   timer.getTime();
//   timer.reset();
//   timer.getTime();
// }, 9000);

const countdown = new CountDown(65);
countdown.start();
