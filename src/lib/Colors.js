export default class Colors {
  constructor() {
    this.pallet = new Set();
  }

  addColor = color => this.pallet.add(color);
  removeColor = color => this.pallet.delete(color);
}
