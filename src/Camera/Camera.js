import { Vector, config } from "../index.js";

export class Camera {
  constructor(x, y) {
    this.position = new Vector(x - config.canvas.width / 2, y - config.canvas.height / 2);
    this.offset = new Vector(0, 0);
    this.zoom = 1;
  }
  getPosition() {
    return this.position;
  }
  setPosition(x, y){
    this.position.update(x - config.canvas.width / 2, y - config.canvas.height / 2);
  }
  getZoom() {
    return this.zoom;
  }
}
