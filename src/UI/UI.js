import { UIType } from "./UIType.js";

export class UI {
    constructor(type, name, position) {
        this.name = name
        this.type = type;
        this.position = position;
        this.gameWorld = false;
    }

    drawUI(context){

    }
}