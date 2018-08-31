import Physics from "./Physics";

export class Level {
  constructor(name, opts, environment) {
    this.name = name;
    this.opts = opts;
    this.environment = environment;

    this.backgroundColor = "black";
    this.entities = [];
    this.totalTime = 0;

    //override defaults
    this.setOpts(opts);
  }

  setOpts = opts => {
    for (let key in opts) {
      this[key] = opts[key];
    }
  };

  addEntity = entity => {
    entity.level = this.level;
    this.entities.push(entity);
  };

  updateEntities = () => {};

  update = deltaTime => {
    this.deltaTime = deltaTime;

    this.entities.forEach(entity => {
      entity.update(deltaTime, this.environment);
    });

    this.totalTime += this.deltaTime;
  };

  start = deltaTime => {
    this.update(deltaTime);
  };
}
