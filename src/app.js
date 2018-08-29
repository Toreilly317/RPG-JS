import Game from "./lib/Game.js";
import Go from "./lib/abilities/Go";
import BounceOffBounds from "./lib/abilities/BounceOffBounds";

import Rectangle from "./lib/shapes/Rectangle";
import Circle from "./lib/shapes/Circle";

const game = new Game("canvas");

const brick = new Rectangle(16, 16);
brick.vel.set(0, 1);
brick.pos.set(20, 20);
brick.addAbility(new Go());
brick.addAbility(new BounceOffBounds());

const circle = new Circle(16);
circle.vel.set(0, 1);
circle.pos.set(100, 20);
circle.addAbility(new Go());
circle.addAbility(new BounceOffBounds());

game.addEntity(brick);
game.addEntity(circle);

game.start();

window.game = game;
