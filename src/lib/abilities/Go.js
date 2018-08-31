import Ability from "../Ability";

class Go extends Ability {
  constructor() {
    super("go");
  }

  update = (entity, deltaTime) => {
    entity.pos.x += entity.vel.x * deltaTime;
    entity.pos.y += entity.vel.y * deltaTime;
  };
}

export default Go;
