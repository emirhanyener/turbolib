import { GameObject } from "./GameObject.js";
import { Physics } from "./Physics.js";

export class GameObjects{
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
        return this.gameobjects.find((gameObject)=>gameObject.name==name);
        console.error("GameObject not found");
    }
}