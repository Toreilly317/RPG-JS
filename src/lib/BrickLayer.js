import Brick from "./Brick";

export default class BrickLayer {
  constructor(context) {
    this.context = context;
    this.bricks = [];
    this.pallet = [];
    this.tileSize = this.context.canvas.width / 10;
  }

  addBrick = () => {
    this.bricks.push();
  };

  randomColor = () => {
    const colors = [
      "#7DB73B",
      "#201F20",
      "#FC385D",
      "#FC385D",
      "#C46F56",
      "#CF3788"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  build = (update = () => {
    return;
  });

  draw = () => {
    this.bricks.forEach(brickRow => {
      brickRow.forEach(brick => {
        if (brick !== 0) {
          this.context.fillStyle = brick.color;
          this.context.fillRect(
            brick.pos.x,
            brick.pos.y,
            this.tileSize,
            this.tileSize
          );
          this.context.strokeRect(
            brick.pos.x,
            brick.pos.y,
            this.tileSize - 1,
            this.tileSize - 1
          );
          this.context.stroke();
        }
      });
    });
  };
}
