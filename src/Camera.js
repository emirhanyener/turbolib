import { Vector } from "./index.js";

export class Camera {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.offset = new Vector(0, 0);
    this.zoom = 1;
  }
  getPosition() {
    return this.position;
  }
  getZoom() {
    return this.zoom;
  }
}
