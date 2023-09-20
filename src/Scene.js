import {
  Camera,
  GameObject,
  Physics,
  ImageObject,
  Vector,
  AlertManager,
  UI,
} from "./index.js";

export class Scene {
  constructor() {
    this.gameobjects = [];
    this.ui = [];
    this.images = [];
    this.camera = new Camera(0, 0);
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
}
