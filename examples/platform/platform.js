import { resources } from "../../src/turbolib.js";
import { GameObject } from "../../src/GameObject.js";
import { Position } from "../../src/Position.js";
import { Size } from "../../src/Size.js";
import { Camera } from "../../src/Camera.js";
import { FollowerCamera } from "../../src/FollowerCamera.js";

const speed = 5;

GameObject.create("Player", 50, 200, 75, 75);
GameObject.create("Ground", 200, 300, 400, 60);
GameObject.create("Block1", 300, 200, 100, 20);
GameObject.create("Block2", 200, 100, 100, 20);

resources.setMainCamera(new FollowerCamera(GameObject.find("Player")));
resources.getMainCamera().setDelay(0.005);

GameObject.find("Ground").setColor("#11AA11");
GameObject.find("Block1").setColor("#FB2");
GameObject.find("Block2").setColor("#DA1");

GameObject.find("Player").addPhysics();

GameObject.find("Player").setImage("RocketIdleAnimation");

document.addEventListener("keydown", keyfn);
document.addEventListener("keyup", release);
function keyfn(event) {
  if (event.code == "KeyA") {
    GameObject.find("Player").getPhysics().velocity.x = -speed;
    GameObject.find("Player").setImage("RocketLeftAnimation");
  }
  if (event.code == "KeyD") {
    GameObject.find("Player").getPhysics().velocity.x = speed;
    GameObject.find("Player").setImage("RocketRightAnimation");
  }
  if (event.code == "KeyW") {
    GameObject.find("Player").getPhysics().velocity.y = -5;
  }
}
function release(event) {
  if (event.code == "KeyA" || event.code == "KeyD") {
    GameObject.find("Player").getPhysics().velocity.x = 0;
    GameObject.find("Player").setImage("RocketIdleAnimation");
  }
}
