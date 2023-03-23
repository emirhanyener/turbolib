import { config } from "./Config.js";
import { Size } from "./Size.js";
import { Velocity } from "./Velocity.js";

export class Physics{
    constructor(gameObject){
        this.gameObject = gameObject;
        this.velocity = new Velocity(0, 0);
        this.mass = 1;
    }

    calculate(){
        this.gameObject.position.add(this.velocity.x, this.velocity.y);
        if(this.gameObject.checkTrigger(0, 0, 0, this.gameObject.size.y / 2).length == 0){
            this.velocity.add(0, this.mass * config.gravity / 100);
        } else {
            this.velocity.y = 0;
        }
        
    }
    getMass(){
        return this.mass;
    }
    setMass(mass){
        this.mass = mass;
    }
}