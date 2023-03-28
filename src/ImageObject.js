import { resources } from "./turbolib.js";

export class ImageObject{
    constructor(src, name){
        this.image = [];
        let temp = new Image();
        temp.src = src;
        this.image.push(temp);
        this.name = name;
        this.index = 0;
        this.time = 0;
        this.animationSpeed = 10;
    }

    setAnimationSpeed(newSpeed){
        this.animationSpeed = newSpeed;
    }
    addImage(name){
        this.image.push(resources.findImage(name).image[0]);
    }
    getImage(){
        if(this.time > this.animationSpeed){
            this.index++;
            this.time = 0;
        }
        this.time++;
        return this.image[this.index % this.image.length];
    }
}