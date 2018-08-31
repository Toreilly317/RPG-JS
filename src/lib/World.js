import { Level } from "./Level";
import Physics from "./Physics";

export class World {
  constructor(name, opts, game) {
    this.name = name;

    this.environment = { gravity: 1000 };

    //levels
    this.levels = {};
    this.currentLevel = this.levels[0];

    //override defaults
    this.setOpts(opts);

    //add world to game
  }

  setOpts = opts => {
    for (key in opts) {
      this[key] = opts[key];
    }
  };

  addLevel = (name, opts) => {
    console.log(this.environment);
    const level = new Level(name, opts, this.environment);
    this.levels[name] = level;
    return level;
  };
}
