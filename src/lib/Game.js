import Timer from "./Timer";
import ColorPallet from "./Colors";
import Screen from "./Screen";
import Vec2 from "./Vec2";

const defaults = {};

export default class Game {
  constructor(id) {
    this.backgroundColor = "black";

    //set up canvas
    this.screen = new Screen(id);
    this.ctx = this.screen.ctx;

    this.tileSize = new Vec2();
    this.timer = new Timer(1 / 60);
    this.gravity = 1000;

    //timer
    this.frameLength = 1 / 60;
    this.timer = new Timer(this.frameLength);
    this.timer.start();
    this.deltaTime = this.timer.deltaTime;

    //entities
    this.entities = [];
  }

  addEntity = entity => {
    entity.ctx = this.ctx;
    entity.gravity = this.gravity;
    this.entities.push(entity);
  };

  clearAndDrawBackground = () => {
    const x = this.screen.size.x;
    const y = this.screen.size.y;
    this.ctx.clearRect(0, 0, this.screen, y);
    this.screen.ctx.fillStyle = this.backgroundColor;
    this.screen.ctx.fillRect(0, 0, x, y);
  };

  updateEntities = () => {
    this.entities.forEach(entity => {
      //this.checkOutOfBounds(entity);
      entity.update();
    });
  };

  update = time => {
    this.timer.update(time);
    console.log(this.deltaTime);
    this.updateEntities();
    this.clearAndDrawBackground();
    this.draw();
    requestAnimationFrame(this.update);
  };

  draw = () => {
    this.entities.forEach(entity => entity.draw());
  };

  start = (time = 0) => {
    this.update();
  };

  show = () => {
    console.log(this.deltaTime);
  };
}
