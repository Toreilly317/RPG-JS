import Ability from "../lib/Ability";

class Shoot extends Ability {
  constructor(power = 10) {
    super("fire");
  }

  start = () => {};

  update = (entity, deltaTime) => {
    entity.vel.x += this.power * deltaTime * this.dir;
  };
}
