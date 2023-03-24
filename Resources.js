import { GameObject } from "./GameObject.js";
import { Physics } from "./Physics.js";
import { ImageObject } from "./index.js";

export class Resources{
    constructor(){
        this.gameobjects = [];
        this.images = [];
    }
    getGameObjects(){
        return this.gameobjects;
    }
    addGameObject(gameObject){
        this.gameobjects.push(gameObject);
    }
    findGameObject(name){
        let temp = this.gameobjects.find((gameObject) => gameObject.name == name);
        
        if(temp){
            return temp;
        }

        console.error("GameObject not found");
    }

    addImage(image){
        this.images.push(image);
    }
    findImage(name){
        let temp = this.images.find((image) => image.name == name);
        
        if(temp){
            return temp;
        }

        console.error("Image not found");
    }

    createAnimation(name, images, animationSpeed){
        this.addImage(new ImageObject(this.findImage(images[0]).image[0].src, name));

        for (let index = 1; index < images.length; index++) {
            this.findImage(name).addImage(images[index]);
        }

        this.findImage(name).setAnimationSpeed(animationSpeed);
    }
}