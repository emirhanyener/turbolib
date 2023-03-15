import { physics } from "./turbolib.js";
import { Physics } from "./Physics.js";

export class GameObject{
    constructor(name, position, size){
        this.name = name;
        this.position = position;
        this.size = size;
    }

    setSize(x, y){
        this.size = new Size;
    }
    setPosition(x, y){
        this.position = new Position(x, y);
    }
    addPhysics(){
        if(this.getPhysics()){
            console.error("Physics already added");
        }
        else{
            physics.push(new Physics(this));
        }
    }
    getPhysics(){
        let temp = physics.find((physics) => physics.gameObject.name == this.name);

        if(temp){
            return temp;
        }

        console.error("Physics not found");
    }
}