import { Camera } from "./Camera.js";
import { GameObject } from "./GameObject.js";
import { Physics } from "./Physics.js";
import { ImageObject, Vector } from "./index.js";

export class Resources {
  constructor() {
    this.gameobjects = [];
    this.ui = [];
    this.images = [];
    this.camera = new Camera(0, 0);
    this.mouse = new Vector(0, 0);
    this._mouse = new Vector(0, 0);
  }
  getMainCamera() {
    return this.camera;
  }
  setMainCamera(camera) {
    this.camera = camera;
  }


  getMousePosition(){
    this._mouse.x = this.mouse.x + this.camera.position.x;
    this._mouse.y = this.mouse.y + this.camera.position.y;
    return this._mouse;
  }

  
  getGameObjects() {
    return this.gameobjects;
  }
  addGameObject(gameObject) {
    if(this.isGameObjectExists(gameObject.name)){
      console.error("GameObject already exists");
      return;
    }
    this.gameobjects.push(gameObject);
  }
  isGameObjectExists(name){
    if(this.gameobjects.find((gameObject) => gameObject.name == name))
      return true;
    return false;
  }
  findGameObject(name) {
    let temp = this.gameobjects.find((gameObject) => gameObject.name == name);

    if (temp) {
      return temp;
    }

    console.error("GameObject not found");
  }


  getUI() {
    return this.ui;
  }
  addUI(item) {
    if(this.isUIExists(item.name)){
      console.error("UI already exists");
      return;
    }
    this.ui.push(item);
  }
  isUIExists(name){
    if(this.images.find((image) => image.name == name))
      return true;
    return false;
  }
  findUI(name) {
    let temp = this.ui.find((item) => item.name == name);

    if (temp) {
      return temp;
    }

    console.error("UI not found");
  }
  

  addImage(image) {
    if(this.isImageExists(image.name)){
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
  isImageExists(name){
    if(this.images.find((image) => image.name == name))
      return true;
    return false;
  }
  createAnimation(name, images, animationSpeed) {
    if(this.isImageExists(name)){
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
