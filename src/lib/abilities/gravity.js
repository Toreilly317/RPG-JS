import Ability from "../Ability";

class Go extends Ability {
  constructor(gravity = 1000) {
    super("gravity");
  }

  update = (entity, deltaTime, level) => {
    const gravity = level.gravity;
    entity.pos.y += deltaTime;
  };
}

export default Go;
