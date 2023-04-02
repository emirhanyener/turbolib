export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  setX(x) {
    this.x = x;
  }
  setX(y) {
    this.y = y;
  }
  update(x, y) {
    this.x = x;
    this.y = y;
  }
  add(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
}
