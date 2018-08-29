import Vec2 from "./Vec2";

export default class Ball {
  constructor(ctx, r = 16) {
    this.radius = r;
    this.ctx = ctx;
    this.cW = this.ctx.canvas.width;
    this.cH = this.ctx.canvas.height;
    this.initPos = new Vec2(this.cW / 2, this.cH - this.radius * 2);

    this.vel = new Vec2(0, 0);

    //set to initial or "reset" position
    this.pos = new Vec2(this.initPos.x, this.initPos.y);
  }

  update = () => {};

  fire = () => {
    this.vel.set(10, 10);
  };

  draw = () => {
    this.ctx.fillStyle = "white";
    this.ctx.arc(
      this.initPos.x,
      this.initPos.y,
      this.radius,
      0 * Math.PI,
      2 * Math.PI
    );
    this.ctx.fill();
  };

  reset = () => {
    this.pos.set();
  };
}
