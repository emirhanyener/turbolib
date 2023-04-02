export class Size {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getWidth() {
    return this.x;
  }
  getHeight() {
    return this.y;
  }
  update(x, y) {
    this.x = x;
    this.y = y;
  }
  scale(newScale) {
    this.x = this.x * newScale;
    this.y = this.y * newScale;
  }
}
