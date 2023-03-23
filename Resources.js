import { GameObject } from "./GameObject.js";
import { Physics } from "./Physics.js";

export class Resources{
    constructor(){
        this.gameobjects = [];
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
}