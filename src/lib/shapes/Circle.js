import Entity from "../Entity";

class Circle extends Entity {
  constructor(r = 16) {
    super();
    this.radius = r;
  }

  draw = () => {
    this.ctx.strokeStyle = "white'";
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  };
}

export default Circle;
