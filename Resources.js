import { GameObject } from "./GameObject.js";
import { Physics } from "./Physics.js";

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
}