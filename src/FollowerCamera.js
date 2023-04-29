import { Camera } from "./Camera.js";
import { Vector } from "./Vector.js";
import { config } from "./Config.js";

export class FollowerCamera extends Camera {
  constructor(gameobject) {
    super(0, 0);
    this.gameobject = gameobject;
    this.delay = 1;
  }
  getPosition() {
    this.position.update(
      this.position.x +
        (this.gameobject.position.x - this.position.x) * this.delay -
        (config.canvas.width / 2) * this.delay + this.offset.x,
      this.gameobject.position.y - config.canvas.height / 2 + this.offset.y
    );
    return this.position;
  }
  setDelay(delay) {
    this.delay = delay;
  }
}
