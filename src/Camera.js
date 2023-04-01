import { Position } from "./Position.js";

export class Camera{
    constructor(x, y){
        this.position = new Position(x, y);
    }
    getPosition(){
        return this.position;
    }
}