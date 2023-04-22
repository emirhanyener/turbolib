import { Vector } from "../Vector.js";
import { resources } from "../turbolib.js";
import { UI } from "./UI.js";

export class UILine extends UI{
    constructor(type, name, position){
        super(type, name, position);
        this.toPosition = new Vector(0, 0);
    }

    updateFromTo(fromX, fromY, toX, toY){
        this.position.update(fromX, fromY);
        this.toPosition.update(toX, toY);
    }

    drawUI(context){
        context.strokeStyle = "#FF0000";
        context.beginPath();
        context.moveTo(this.position.x - resources.getMainCamera().getPosition().x, this.position.y - resources.getMainCamera().getPosition().y);
        context.lineTo(this.toPosition.x - resources.getMainCamera().getPosition().x, this.toPosition.y - resources.getMainCamera().getPosition().y);
        context.stroke();
    }
}