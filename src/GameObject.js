import { physics, resources, functions, Physics, Vector } from "./index.js";

export class GameObject {
  constructor(name, position, size) {
    this.name = name;
    this.position = position;
    this.size = size;
    this.image;
    this.color;
    this.isInteractive = true;
    this.active = true;
  }

  /**
   * Set image from images.json name.
   * @param {string} name
   */
  setImage(name) {
    this.image = resources.findImage(name);
  }

  /**
   * Set gameobject solid color.
   * @param {string} color
   */
  setColor(color) {
    this.color = color;
  }

  /**
   * Add physics to gameobject.
   */
  addPhysics() {
    if (physics.find((physics) => physics.gameObject == this)) {
      console.error("Physics already added");
    } else {
      let temp = new Physics(this);
      physics.push(temp);
      return temp;
    }
  }

  /**
   * Add new function to gameobject.
   * @param {Function} fn
   */
  addFunction(fn) {
    fn.gameobject = this;
    functions.push(fn);
  }

  /**
   * Get added physics.
   */
  getPhysics() {
    let temp = physics.find((physics) => physics.gameObject == this);

    if (temp) {
      return temp;
    }

    console.error("Physics not found");
  }

  /**
   * Get added gameobject with name.
   * @param {string} name
   */
  static find(name) {
    return resources.scene.findGameObject(name);
  }
  static findAll(name) {
    return resources.scene.findGameObjects(name);
  }

  static createWith(name, position, size) {
    let temp = new GameObject(name, position, size);
    resources.scene.addGameObject(temp);
  }

  /**
   * Create new gameobject and add to resources.
   * @param {string} name
   * @param {int} posX
   * @param {int} posY
   * @param {int} sizeX
   * @param {int} sizeY
   */
  static create(name, posX, posY, sizeX, sizeY) {
    let temp = new GameObject(
      name,
      new Vector(posX, posY),
      new Vector(sizeX, sizeY)
    );
    resources.scene.addGameObject(temp);
    return temp;
  }

  /**
   * Create new gameobject and return.
   * @param {string} name
   * @param {int} posX
   * @param {int} posY
   * @param {int} sizeX
   * @param {int} sizeY
   */
  static createRaw(name, posX, posY, sizeX, sizeY) {
    let temp = new GameObject(
      name,
      new Vector(posX, posY),
      new Vector(sizeX, sizeY)
    );
    return temp;
  }

  /**
   * Destroy gameobject.
   */
  destroy() {
    resources.scene
      .getGameObjects()
      .splice(resources.scene.getGameObjects().indexOf(this), 1);
  }

  /**
   * Return the gameobjects inside the vector.
   * @param {int} offsetX
   * @param {int} offsetY
   * @param {int} x
   * @param {int} y
   * @returns
   */
  checkTrigger(offsetX, offsetY, x, y) {
    let detectedObjects = [];
    let step = Math.round(
      Math.sqrt(Math.pow(x - offsetX, 2) + Math.pow(y - offsetY, 2))
    );

    for (
      let index = 0;
      index < resources.scene.getGameObjects().length;
      index++
    ) {
      const item = resources.scene.getGameObjects()[index];

      for (let i = 0; i < step + 2; i++) {
        if (item == this || !item.isInteractive) {
          break;
        }
        if (
          this.position.x + offsetX + (x / step) * i >
          item.position.x - item.size.x / 2
        ) {
          if (
            this.position.x + offsetX + (x / step) * i <
            item.position.x + item.size.x / 2
          ) {
            if (
              this.position.y + offsetY + (y / step) * i >
              item.position.y - item.size.y / 2
            ) {
              if (
                this.position.y + offsetY + (y / step) * i <
                item.position.y + item.size.y / 2
              ) {
                detectedObjects.push(item);
                break;
              }
            }
          }
        }
      }
    }
    return detectedObjects;
  }

  clone(){
    let temp = GameObject.create(this.name, this.position.x, this.position.y, this.size.x, this.size.y);
    temp.image = this.image;
    temp.color = this.color;
    temp.isInteractive = this.isInteractive;
    temp.active = this.active;
    if(this.getPhysics()){
      temp.addPhysics();
    }
    return temp;
  }
}
