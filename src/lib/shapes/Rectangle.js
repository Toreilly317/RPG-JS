import Entity from "../Entity";

class Rectangle extends Entity {
  constructor(w = 16, h = 16, color = "white") {
    super(w, h);
    this.color = "white";
    this.w = w;
    this.h = h;
  }

  draw = ctx => {
    debugger;
    console.log("square", this);
    const { size } = this.physics.size;
    const { pos } = this.physics.pos;

    ctx.fillStyle = this.color;
    ctx.fillRect(pos.x, pos.y, size.x, size.y);
  };
}

//only paint the tiles that need to be repainted

export default Rectangle;
