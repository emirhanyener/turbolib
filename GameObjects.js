import { GameObject } from "./GameObject.js";

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
        for (let index = 0; index < this.gameobjects.length; index++) {
            if(this.gameobjects[index].name == name){
                return this.gameobjects[index];
            }
        }
        console.error("GameObject not found");
    }
}