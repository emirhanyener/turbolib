export class UI {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.color = "#000000";
    this.gameWorld = false;
    this.active = true;
  }

  drawUI(context) {
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
  }
}
