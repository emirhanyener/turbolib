import { Camera } from "./Camera.js";
import { Position } from "./Position.js";
import { config } from "./Config.js";

export class FollowerCamera extends Camera{
    constructor(gameobject){
        super(0, 0);
        this.gameobject = gameobject;
    }
    getPosition(){
        this.position.update(this.gameobject.position.x - config.canvas.width / 2, this.gameobject.position.y - config.canvas.height / 2);
        return this.position;
    }
}