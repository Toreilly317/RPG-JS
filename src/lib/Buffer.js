export default class Buffer {
  constructor() {
    this.buffer = document.createElement("canvas");
    this.context = this.bufferer.getContext("2d");
    return this;
  }
}
