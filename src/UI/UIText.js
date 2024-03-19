import { resources, UI } from "../index.js";

export class UIText extends UI {
  constructor(name, text, position, size) {
    super(name, position);
    this.text = text;
    this.size = size;
    this.fontFamily = "Arial";
  }

  drawUI(context) {
    super.drawUI(context);
    context.font = this.size + "px " + this.fontFamily;

    context.fillText(
      this.text,
      this.position.x -
        (this.gameWorld ? resources.scene.getMainCamera().getPosition().x : 0),
      this.position.y -
        (this.gameWorld ? resources.scene.getMainCamera().getPosition().y : 0)
    );
  }
}
