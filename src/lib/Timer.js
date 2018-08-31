export default class Timer {
  constructor(deltaTime = 1 / 60) {
    this.now = new Date().getSeconds();

    this.lastTime = 0;
    this.accumulatedTime = 0;
    this.deltaTime = deltaTime;
    this.onFullCycle = () => true;
    this.update = this.update.bind(this);
  }

  update = function*(onChange) {
    this.accumulatedTime += (this.now - this.lastTime) / 1000;
    if (this.accumulatedTime > 1) {
      this.accumulatedTime = 1;
    }

    while (this.accumulatedTime > this.deltaTime) {
      this.accumulatedTime -= this.deltaTime;
      yield onChange.next(deltaTime, level, ctx);
    }

    yield onchange.next().fullCycle;

    this.lastTime = this.now;
  };

  update = (level, ctx, onTick) => {
    //prevent dead frame

    onTick = () => {};

    level.entities.forEach(entity => {
      entity.update(level, this.deltaTime);
      entity.draw(ctx);
    });
  };
}
