export default class Matrix {
  constructor(xSize, ySize) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
  }

  create = (xSize, ySize) => {};

  create = (xSize, ySize) => {
    for (let x = 0; x < xSize; ++x) {
      this.matrix[x] = new Array();
      for (let y = 0; y < ySize; ++y) {
        this.matrix[x][y] = new Brick(
          this.randomColor(),
          x * this.tileSize,
          y * this.tileSize
        );
        this.matrix[x][y] = Math.round(Math.random())
          ? new Brick(this.randomColor(), x * this.tileSize, y * this.tileSize)
          : 0;
      }
    }
  };

  fillAll = () => {
    return false;
  };
}
