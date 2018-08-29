class Timer {
  constructor(deltaTime = 1 / 60, time = window.time) {
    this.accumulatedTime = 0;
    this.lastTime = 0;
    this.deltaTime = deltaTime;
    this.update();
  }

  update = time => {
    if (this.accumulatedTime > 1) {
      this.accumulatedTime = 1;
    }

    while (this.accumulatedTime > this.deltaTime) {
      this.update(this.deltaTime);
      this.accumulatedTime -= this.deltaTime;
    }

    this.lastTime = time;

    requestAnimationFrame(this.update);
  };

  start(time) {
    this.update(time);
  }
}

export default Timer;
