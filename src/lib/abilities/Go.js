import Ability from "../Ability";

class Go extends Ability {
  constructor() {
    super("go");
  }

  update = (entity, deltaTime) => {
    entity.pos.x += entity.vel.x;
    entity.pos.y += entity.vel.y;
  };
}

export default Go;
