import Vec2 from "./Vec2";

export default class Brick {
  constructor(color, x = 0, y = 0, h = 16, w = 16) {
    this.color = color;
    this.pos = new Vec2(x, y);
    this.vel = new Vec2(0, 1);
    this.size = new Vec2(h, w);
    this.border = {
      left: () => {}
    };
  }

  update = () => {
    this.pos.y += this.vel.y;
  };

  draw = () => {};
}
