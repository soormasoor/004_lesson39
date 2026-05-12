"use strict";
class Timer {
  constructor(totalSeconds = 0) {
    this.intervalId = null;
    this.isStopped = false;
    this.totalSeconds = totalSeconds;
  }

  makeCountDown() {
    return new CountDown(this.totalSeconds);
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

  start() {
    if (this.intervalId || this.isStopped) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.totalSeconds++;
      this.getTime();
    }, 1000);
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

class CountDown extends Timer {
  constructor(totalSeconds) {
    super(totalSeconds);
  }

  start() {
    if (this.intervalId || this.isStopped) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.totalSeconds--;
      this.getTime();

      if (this.totalSeconds <= 0) {
        this.pause();
        console.log("Finished");
      }
    }, 1000);
  }
}

const countdown = new CountDown(10);
countdown.start();
