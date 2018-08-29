class Colors {
  constructor() {
    this.pallet = new Set();
  }

  addColor = color => this.pallet.add(color);
  removeColor = color => this.pallet.delete(color);
  random = () => {
    return this.pallet[Math.floor(Math.random() * this.pallet.length)];
  };
}

export default Colors;
