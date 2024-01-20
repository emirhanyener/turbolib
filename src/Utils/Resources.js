import { ImageObject, Vector, AlertManager, Scene, config } from "../index.js";

export class Resources {
  constructor() {
    this.scene = new Scene();
    this.images = [];
    this.alertManager = new AlertManager();
    this.mouse = {
      worldPosition: new Vector(0, 0),
      canvasPosition: new Vector(0, 0),
      isPointerDown: false,
    };
    this._mouse = new Vector(0, 0);
    this.gameTime = 0;
  }

  /**
   * Returns mouse position as Vector.
   * @returns Vector
   */
  getMousePosition() {
    this.mouse.worldPosition.update(
      this.mouse.canvasPosition.x + this.scene.camera.position.x,
      this.mouse.canvasPosition.y + this.scene.camera.position.y
    );
    return this.mouse.worldPosition;
  }

  /**
   * Find added gameobject element.
   * @param {string} name
   * @returns GameObject
   */
  findGameObject(name) {
    let temp = this.gameobjects.find((gameObject) => gameObject.name == name);

    if (temp) {
      return temp;
    }

    if (config.debug) {
      console.error("GameObject not found");
    }
  }

  /**
   * Add new alert to alert manager.
   * @param {string} text
   * @param {string} color
   */
  addAlert(text, color) {
    this.alertManager.addAlert(text, this.gameTime, color);
  }

  /**
   * Find added UI element
   * @param {string} name
   * @returns UI
   */
  findUI(name) {
    let temp = this.ui.find((item) => item.name == name);

    if (temp) {
      return temp;
    }

    if (config.debug) {
      console.error("UI not found");
    }
  }

  addImage(image) {
    if (this.isImageExists(image.name)) {
      if (config.debug) {
        console.error("Image already exists");
      }
      return;
    }
    this.images.push(image);
    if (config.debug) {
      console.log("Image added: ", image);
    }
  }
  findImage(name) {
    let temp = this.images.find((image) => image.name == name);

    if (temp) {
      return temp;
    }

    if (config.debug) {
      console.error("Image not found: " + name);
    }
  }
  isImageExists(name) {
    if (this.images.find((image) => image.name == name)) return true;
    return false;
  }
  createAnimation(name, images, animationSpeed) {
    if (this.isImageExists(name)) {
      if (config.debug) {
        console.error("Image already exists");
      }
      return;
    }
    this.addImage(
      new ImageObject(this.findImage(images[0]).image[0].src, name)
    );

    for (let index = 1; index < images.length; index++) {
      this.findImage(name).addImage(images[index]);
    }

    this.findImage(name).setAnimationSpeed(animationSpeed);
  }
}
