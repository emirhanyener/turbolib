import { config } from "./Config.js";
import { Size } from "./Size.js";
import { Velocity } from "./Velocity.js";

export class Physics{
    constructor(gameObject){
        this.gameObject = gameObject;
        this.velocity = new Velocity(0, 0);
        this.mass = 1;
        this.isGrounded = false;
    }

    calculate(){
        this.gameObject.position.add(this.velocity.x, this.velocity.y);

        //down
        let downArray = this.gameObject.checkTrigger(-this.gameObject.size.x / 2, this.gameObject.size.y / 2, this.gameObject.size.x , Math.round(this.velocity.y < 0 ? 0 : this.velocity.y))
                        .concat(this.gameObject.checkTrigger(this.gameObject.size.x / 2, this.gameObject.size.y / 2, -this.gameObject.size.x , Math.round(this.velocity.y < 0 ? 0 : this.velocity.y)));
        if(downArray.length == 0){
            this.isGrounded = false;
            this.velocity.add(0, this.mass * config.gravity / 100);
        } 
        if(downArray.length > 0){
            this.isGrounded = true;
            this.velocity.y = 0;
            this.gameObject.position.y = downArray[0].position.y - downArray[0].size.y / 2 - this.gameObject.size.y / 2;
        }
        
        //up
        let upArray = this.gameObject.checkTrigger(-this.gameObject.size.x / 2, -this.gameObject.size.y / 2, this.gameObject.size.x , Math.round(this.velocity.y > 0 ? 0 : this.velocity.y))
                      .concat(this.gameObject.checkTrigger(this.gameObject.size.x / 2, -this.gameObject.size.y / 2, -this.gameObject.size.x , Math.round(this.velocity.y > 0 ? 0 : this.velocity.y)));
        if(upArray.length > 0){
            if(upArray.length > 0){
                this.gameObject.position.y = upArray[0].position.y + upArray[0].size.y / 2 + this.gameObject.size.y / 2 + 1;
            }
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