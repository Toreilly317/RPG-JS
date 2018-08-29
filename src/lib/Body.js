import Vec2 from "./Vec2";

export default class Body {
  constructor(ctx) {
    this.pos = new Vec2(0, 0);
    this.vel = new Vec2(0, 0);
    this.size = new Vec2(0, 0);
    this.ctx = ctx;
    this.traits = [];
  }

  addTrait = trait => {
    this.traits.push(trait);
    this[trait.NAME] = trait;
  };

  obstruct = side => {
    this.traits.forEach(trait => {
      trait.obstruct(this, side);
    });
  };

  update = deltaTime => {
    this.traits.forEach(trait => {
      trait.update(this, deltaTime);
    });
  };
}
