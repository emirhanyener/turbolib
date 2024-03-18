import { Camera, Vector, config } from "../index.js";

export class FollowerCamera extends Camera {
  constructor(gameobject) {
    super(gameobject.position.x, gameobject.position.y);
    this.gameobject = gameobject;
    this.delay = 1;
  }
  getPosition() {
    this.position.update(
      this.position.x +
        (this.gameobject.position.x - this.position.x) * this.delay -
        (config.canvas.width / 2) * this.delay +
        this.offset.x,
      this.gameobject.position.y - config.canvas.height / 2 + this.offset.y
    );
    return this.position;
  }
  setDelay(delay) {
    this.delay = delay;
  }
}
