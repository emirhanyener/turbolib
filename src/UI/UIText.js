import { Vector } from "../Vector.js";
import { resources } from "../turbolib.js";
import { UI } from "./UI.js";

export class UIText extends UI{
    constructor(name, text, position, size){
        super(name, position);
        this.text = text;
        this.size = size;
    }

    drawUI(context){
        context.fillStyle = "#000";
        context.font = this.size + "px Arial";

        context.fillText(this.text, this.position.x - (this.gameWorld ? resources.getMainCamera().getPosition().x : 0), this.position.y - (this.gameWorld ? resources.getMainCamera().getPosition().y : 0));
    }
}