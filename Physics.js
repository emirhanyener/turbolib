import { config } from "./Config.js";
import { Velocity } from "./Velocity.js";

export class Physics{
    constructor(gameObject){
        this.gameObject = gameObject;
        this.velocity = new Velocity(0, 0);
        this.mass = 1;
    }

    calculate(){
        this.velocity.add(0, this.mass * config.gravity / 100);
        this.gameObject.position.add(this.velocity.x, this.velocity.y);
    }
    getMass(){
        return this.mass;
    }
    setMass(mass){
        this.mass = mass;
    }
}