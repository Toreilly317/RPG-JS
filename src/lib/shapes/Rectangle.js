import Entity from "../Entity";

class Rectangle extends Entity {
  constructor(w = 16, h = 16, color = "white") {
    super();
    this.color = color;
    this.size.set(w, h);
  }

  draw = () => {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
  };
}

export default Rectangle;
