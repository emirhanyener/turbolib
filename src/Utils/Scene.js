import {
  Camera,
  GameObject,
  Physics,
  ImageObject,
  Vector,
  AlertManager,
  UI,
} from "../index.js";

export class Scene {
  constructor() {
    this.gameobjects = [];
    this.physics = [];
    this.functions = [];
    this.ui = [];
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
  findGameObjects(name) {
    let temp = this.gameobjects.filter((gameObject) => gameObject.name == name);

    if (temp) {
      return temp;
    }

    console.error("GameObjects not found");
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

  build(){}
}
