import { resources } from "../../src/turbolib.js";
import { GameObject } from "../../src/GameObject.js";
import { Position } from "../../src/Position.js";
import { Size } from "../../src/Size.js";

GameObject.create("Player", 50, 200, 75, 75);
GameObject.create("Ground", 200, 300, 400, 60);
GameObject.create("Block1", 300, 200, 100, 20);
GameObject.create("Block2", 200, 100, 100, 20);


GameObject.find("Ground").setColor("#11AA11");
GameObject.find("Block1").setColor("#FB2");
GameObject.find("Block2").setColor("#DA1");

GameObject.find("Player").addPhysics();

resources.createAnimation("anim1", ["idle1", "idle2", "idle3", "idle4", "idle5", "idle6", "idle7", "idle8"], 6);
GameObject.find("Player").setImage("anim1");

document.addEventListener("keydown", keyfn);
document.addEventListener("keyup", release);
function keyfn(event){
    if(event.code == "KeyA"){
        GameObject.find("Player").getPhysics().velocity.x = -1;
    }
    if(event.code == "KeyD"){
        GameObject.find("Player").getPhysics().velocity.x = 1;
    }
    if(event.code == "KeyW"){
        GameObject.find("Player").getPhysics().velocity.y = -5;
    }
}
function release(event){
    if(event.code == "KeyA"){
        GameObject.find("Player").getPhysics().velocity.x = 0;
    }
    if(event.code == "KeyD"){
        GameObject.find("Player").getPhysics().velocity.x = 0;
    }
}