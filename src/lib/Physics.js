import Vec2 from "./Vec2";

class Physics {
  constructor(opts) {
    this.opts = opts;
    this.enabled = true;
    this.pos = new Vec2(0, 0);
    this.vel = new Vec2(0, 0);
    this.size = new Vec2(0, 0);
    this.mass = 1;
    this.acceleration = 0;
    this.distance = 0;
  }

  update = (deltaTime, environment) => {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  };
}

export default Physics;
