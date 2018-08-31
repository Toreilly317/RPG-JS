import Game from "./lib/Game.js";
import Go from "./lib/abilities/Go";
import BounceOffBounds from "./lib/abilities/BounceOffBounds";

import Rectangle from "./lib/shapes/Rectangle";

const game = new Game();
const worldOne = game.addWorld("1");
const level1 = worldOne.addLevel("1");

const brick = new Rectangle(1, 1);
brick.physics.vel.set(2, 2);

level1.addEntity(brick);

game.start("1", "1");
