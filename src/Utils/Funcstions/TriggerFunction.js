import { Function } from "../../index.js";

export class TriggerFunction extends Function {
  constructor(gameobject) {
    super();
    this.gameobject = gameobject;
  }
  run() {
    const up = this.gameobject.checkTrigger(
      -this.gameobject.size.x / 2,
      -this.gameobject.size.y / 2,
      this.gameobject.size.x,
      0,
      true,
      true
    );
    const bottom = this.gameobject.checkTrigger(
      -this.gameobject.size.x / 2,
      this.gameobject.size.y / 2,
      this.gameobject.size.x,
      0,
      true,
      true
    );
    const left = this.gameobject.checkTrigger(
      -this.gameobject.size.x / 2,
      -this.gameobject.size.y / 2,
      0,
      this.gameobject.size.y,
      true,
      true
    );
    const right = this.gameobject.checkTrigger(
      this.gameobject.size.x / 2,
      -this.gameobject.size.y / 2,
      0,
      this.gameobject.size.y,
      true,
      true
    );

    if (up.length > 0) {
      this.onTriggered(up);
    }
    if (bottom.length > 0) {
      this.onTriggered(bottom);
    }
    if (left.length > 0) {
      this.onTriggered(left);
    }
    if (right.length > 0) {
      this.onTriggered(right);
    }
  }
  onTriggered(gameobjects) {}
}
