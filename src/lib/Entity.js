import Vec2 from "./Vec2";

class Entity {
  constructor() {
    //physicis
    this.pos = new Vec2(0, 0);
    this.vel = new Vec2(0, 0);
    this.size = new Vec2(0, 0);
    this.mass = 1;
    this.acceleration = 0;
    this.distance = 0;

    //other
    this.abilities = [];
  }

  addAbility(ability) {
    this.abilities.push(ability);
    this[ability.NAME] = ability;
  }

  obstruct(side) {
    this.traits.forEach(trait => {
      trait.obstruct(this, side);
    });
  }

  draw = () => {
    console.log("draw");
  };

  update = deltaTime => {
    this.abilities.forEach(ability => {
      ability.update(this, deltaTime);
    });
  };
}

export default Entity;
