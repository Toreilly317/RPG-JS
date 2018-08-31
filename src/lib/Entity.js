import Physics from "./Physics";

class Entity {
  constructor(w = 16, h = 16) {
    this.physics = new Physics();
    this.physics.size.set(w, h);
    this.abilities = [];
  }

  addAbility = ability => {
    this.abilities.push(ability);
    this[ability.NAME] = ability;
  };

  obstruct = side => {
    this.traits.forEach(trait => {
      trait.obstruct(this, side);
    });
  };

  updateAbilities = () => {
    this.abilities.forEach(ability => {
      ability.update(this.deltaTime);
    });
  };

  draw = ctx => {};

  update = (level, ctx, deltaTime) => {
    this.physics.update(deltaTime, level);
    this.updateAbilities(deltaTime, level);
    this.draw(ctx);
  };
}

export default Entity;
