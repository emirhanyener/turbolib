import { Function } from "./Function.js";

export class ObjectFunction extends Function{
    constructor(gameobject){
        super();
        this.gameobject = gameobject;
    }
}