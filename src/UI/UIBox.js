import { resources } from "../turbolib.js";
import { UI } from "./UI.js";

export class UIBox extends UI{
    constructor(name, position, size){
        super(name, position);
        this.size = size;
    }

    updateSize(sizeX, sizeY){
        this.size.update(sizeX, sizeY);
    }

    drawUI(context){
        super.drawUI(context);
        context.beginPath();
        if(this.gameWorld){
            context.fillRect(this.position.x - resources.getMainCamera().getPosition().x, this.position.y - resources.getMainCamera().getPosition().y, this.size.x, this.size.y);
        } else {
            context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        }
        context.stroke();
    }
}