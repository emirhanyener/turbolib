import {
  Camera,
  GameObject,
  Physics,
  ImageObject,
  Vector,
  AlertManager,
  UI,
} from "./index.js";

export class Resources {
  constructor() {
    this.gameobjects = [];
    this.ui = [];
    this.images = [];
    this.alertManager = new AlertManager();
    this.camera = new Camera(0, 0);
    this.mouse = {
      worldPosition: new Vector(0, 0),
      canvasPosition: new Vector(0, 0),
      isPointerDown: false,
    };
    this._mouse = new Vector(0, 0);
    this.gameTime = 0;
  }

  /**
   * Get current camera.
   * @returns Camera
   */
  getMainCamera() {
    return this.camera;
  }

  /**
   * Set new main camera.
   */
  setMainCamera(camera) {
    this.camera = camera;
  }

  /**
   * Returns mouse position as Vector.
   * @returns Vector
   */
  getMousePosition() {
    this.mouse.worldPosition.update(
      this.mouse.canvasPosition.x + this.camera.position.x,
      this.mouse.canvasPosition.y + this.camera.position.y
    );
    return this.mouse.worldPosition;
  }

  /**
   * Get all added gameobject elements.
   */
  getGameObjects() {
    return this.gameobjects;
  }

  /**
   *
   * @param {GameObject} gameObject
   */
  addGameObject(gameObject) {
    if (this.isGameObjectExists(gameObject.name)) {
      console.error("GameObject already exists");
      return;
    }
    this.gameobjects.push(gameObject);
  }
  isGameObjectExists(name) {
    if (this.gameobjects.find((gameObject) => gameObject.name == name))
      return true;
    return false;
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

    console.error("GameObject not found");
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
   * Get all UI elements.
   */
  getUI() {
    return this.ui;
  }

  /**
   * Add new UI element.
   * @param {UI} item
   */
  addUI(item) {
    if (this.isUIExists(item.name)) {
      console.error("UI already exists");
      return;
    }
    this.ui.push(item);
  }
  isUIExists(name) {
    if (this.images.find((image) => image.name == name)) return true;
    return false;
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

    console.error("UI not found");
  }

  addImage(image) {
    if (this.isImageExists(image.name)) {
      console.error("Image already exists");
      return;
    }
    this.images.push(image);
  }
  findImage(name) {
    let temp = this.images.find((image) => image.name == name);

    if (temp) {
      return temp;
    }

    console.error("Image not found");
  }
  isImageExists(name) {
    if (this.images.find((image) => image.name == name)) return true;
    return false;
  }
  createAnimation(name, images, animationSpeed) {
    if (this.isImageExists(name)) {
      console.error("Image already exists");
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
