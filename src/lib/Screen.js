import Vec2 from "./Vec2";
import Timer from "./Timer";

class Screen {
  constructor() {
    this.timer = new Timer(1 / 60, this.render);
    //set up canvas
    this.buildScreen();
  }

  clearFrame = () => {
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);
  };

  drawBackground = () => {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.size.x, this.size.y);
  };

  buildScreen = () => {
    this.canvas = window.document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.size = new Vec2(480, 960);
    this.canvas.width = this.size.x;
    this.canvas.height = this.size.y;
    window.document.body.appendChild(this.canvas);
  };

  render = level => {
    const getFrame = this.timer.update(level, this.ctx, this.onTick());
    getFrame.next();
  };

  updateLogic = (deltaTime, level) => {
    level.entities.forEach(entity => {
      entity.update(deltaTime, level);
    });
  };

  fullRender = (deltaTime, level, ctx) => {
    this.clearFrame(level);
    this.drawBackground(level);

    level.entities.forEach(entity => {
      entity.draw(deltaTime, level, ctx);
    });
  };

  onTick = function*() {
    this.onTick = yield (deltaTime, level, ctx) =>
      this.updateLogic(deltaTime, level);
    this.onFullCycle = yield (deltaTime, level, ctx) =>
      this.fullRender(deltaTime, level, ctx);
  };
}

export default Screen;
