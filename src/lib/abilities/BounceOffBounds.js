import Ability from "../Ability";

class BounceOffBounds extends Ability {
  constructor(bounds) {
    super("BounceOffBounds");
    this.bounds = bounds;
  }

  update = (entity, dt) => {
    //top
    if (entity.pos.y + entity.size.y < 0) {
      entity.vel.y = -entity.vel.y;
    }

    //left
    if (entity.pos.x + entity.size.x < 0) {
      entity.vel.x = -entity.vel.x;
    }

    //right
    if (entity.pos.x + entity.size.x > this.bounds.size.x) {
      entity.vel.x = -entity.vel.x;
    }

    //bottom
    if (entity.pos.y + entity.size.y > this.bounds.size.y) {
      entity.vel.y = -entity.vel.y;
    }
  };
}

export default BounceOffBounds;
