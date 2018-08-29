import Vec2 from "./Vec2";

class Screen {
  constructor(id, w = 480, h = 960) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.size = new Vec2(w, h);
    this.size.x = window.innerWidth;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default Screen;
