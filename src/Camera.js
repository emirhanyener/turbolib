import { Vector } from "./Vector.js";

export class Camera {
  constructor(x, y) {
    this.position = new Vector(x, y);
  }
  getPosition() {
    return this.position;
  }
}
