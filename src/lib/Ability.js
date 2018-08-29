export default class Ability {
  constructor(name) {
    this.NAME = name;
  }

  update = () => {
    console.warn("Unhandled update call");
  };
}
