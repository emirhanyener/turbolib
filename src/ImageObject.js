import { resources } from "./index.js";

export class ImageObject {
  constructor(src, name) {
    this.image = [];
    let temp = new Image();
    temp.src = src;
    this.image.push(temp);
    this.name = name;
    this.index = 0;
    this.time = 0;
    this.animationSpeed = 10;
    this.loop = true;
    this.flipHorizontal = false;
    this.flipVertical = false;
  }

  getLoop() {
    return this.loop;
  }
  changeLoop() {
    this.loop = !this.loop;
  }

  getFlipHorizontal() {
    if (this.flipHorizontal) return -1;
    return 1;
  }
  getFlipVertical() {
    if (this.flipVertical) return -1;
    return 1;
  }
  changeFlipHorizontal() {
    this.flipHorizontal = !this.flipHorizontal;
  }
  changeFlipVertical() {
    this.flipVertical = !this.flipVertical;
  }

  setAnimationSpeed(newSpeed) {
    this.animationSpeed = newSpeed;
  }
  addImage(name) {
    this.image.push(resources.findImage(name).image[0]);
  }
  getImage() {
    console.log("index: " + this.index + ", image len: " + this.image.length);
    if (this.time > this.animationSpeed) {
      this.time = 0;
      if((!(this.index > this.image.length - 2) && !this.loop) || this.loop){
        this.index++;
      }

      if(this.index > this.image.length - 1){
        this.index = 0;
      }
    }
    this.time++;
    return this.image[this.index];
  }
}
