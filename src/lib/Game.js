import Timer from "./Timer";
import Screen from "./Screen";

import { World } from "./World";

export default class Game {
  constructor() {
    //game necessities

    //worlds
    this.worlds = {};
    this.deltaTime = 1 / 60;

    this.screen = new Screen();

    //game state
    this.gameState = {
      playing: false,
      paused: false,
      loading: false
    };
  }

  addWorld = (name, opts) => {
    const world = new World(name, opts, this);
    this.worlds[name] = world;
    return world;
  };

  run = () => {
    this.screen.render(this.currentLevel);
    requestAnimationFrame(this.run);
  };

  start = (world, level) => {
    this.gameState.playing = true;
    this.currentLevel = this.worlds[world].levels[level];
    this.run();
  };
}
