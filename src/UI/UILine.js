import { UI, Vector, resources } from "../index.js";

export class UILine extends UI {
  constructor(name, position) {
    super(name, position);
    this.toPosition = new Vector(0, 0);
  }

  updateFromTo(fromX, fromY, toX, toY) {
    this.position.update(fromX, fromY);
    this.toPosition.update(toX, toY);
  }

  drawUI(context) {
    super.drawUI(context);
    context.beginPath();
    if (this.gameWorld) {
      context.moveTo(
        this.position.x - resources.scene.getMainCamera().getPosition().x,
        this.position.y - resources.scene.getMainCamera().getPosition().y
      );
      context.lineTo(
        this.toPosition.x - resources.scene.getMainCamera().getPosition().x,
        this.toPosition.y - resources.scene.getMainCamera().getPosition().y
      );
    } else {
      context.moveTo(this.position.x, this.position.y);
      context.lineTo(this.toPosition.x, this.toPosition.y);
    }
    context.stroke();
  }
}
