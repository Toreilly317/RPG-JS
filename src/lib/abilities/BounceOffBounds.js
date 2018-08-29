import Ability from "../Ability";

class BounceOffBounds extends Ability {
  constructor() {
    super("BounceOffBounds");
  }

  update = (entity, dt) => {
    if (entity.outOfBoundsLeft === true) {
      console.log(entity);
      entity.color = "yellow";
      console.log(entity);
      entity.pos.x = 10;
      entity.vel.x = -entity.vel.x;
    }
  };
}

export default BounceOffBounds;
