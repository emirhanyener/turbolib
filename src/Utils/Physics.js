import { config, UILine, Vector, resources } from "../index.js";

export class Physics {
  constructor(gameObject) {
    this.gameObject = gameObject;
    this.velocity = new Vector(0, 0);
    this.angularVelocity = 0;
    this.isGravityActive = true;
    this.mass = 1;
    this.solidFriction = 0.1;
    this.airFriction = 0.001;
    this.isGrounded = false;
    this.bounceRate = 0;
    this.isVisible = false;
  }

  calculate() {
    if (this.gameObject) {
      if (this.gameObject.active) {
        if(this.isGrounded){
          this.velocity.x *= (1 - this.solidFriction);
        }else{
          this.velocity.x *= (1 - this.airFriction);
        }
        this.gameObject.rotationZ += this.angularVelocity;
        //down
        let downArray = this.gameObject
          .checkTrigger(
            -this.gameObject.size.x / 2,
            this.gameObject.size.y / 2,
            this.gameObject.size.x,
            Math.round(this.velocity.y < 0 ? 0 : this.velocity.y), false, true
          )
          .concat(
            this.gameObject.checkTrigger(
              this.gameObject.size.x / 2,
              this.gameObject.size.y / 2,
              -this.gameObject.size.x,
              Math.round(this.velocity.y < 0 ? 0 : this.velocity.y), false, true
            )
          );
        if (downArray.length == 0) {
          this.isGrounded = false;
          if (this.isGravityActive) {
            this.velocity.add(0, (this.mass * config.gravity) / 100);
          }
        }
        if (downArray.length > 0) {
          this.isGrounded = true;
          this.velocity.y = -this.velocity.y * this.bounceRate;
          this.gameObject.position.y =
            downArray[0].position.y -
            downArray[0].size.y / 2 -
            this.gameObject.size.y / 2;
        }

        //up
        let upArray = this.gameObject
          .checkTrigger(
            -this.gameObject.size.x / 2,
            -this.gameObject.size.y / 2,
            this.gameObject.size.x,
            Math.round(this.velocity.y > 0 ? 0 : this.velocity.y), false, true
          )
          .concat(
            this.gameObject.checkTrigger(
              this.gameObject.size.x / 2,
              -this.gameObject.size.y / 2,
              -this.gameObject.size.x,
              Math.round(this.velocity.y > 0 ? 0 : this.velocity.y), false, true
            )
          );
        if (upArray.length > 0) {
          if (upArray.length > 0) {
            this.gameObject.position.y =
              upArray[0].position.y +
              upArray[0].size.y / 2 +
              this.gameObject.size.y / 2 +
              1;
          }
          this.velocity.y = -this.velocity.y * this.bounceRate;
        }

        //right
        let rightArray = this.gameObject
          .checkTrigger(
            this.gameObject.size.x / 2,
            this.gameObject.size.y / 2 - 1,
            Math.round(this.velocity.x < 0 ? 0 : this.velocity.x),
            -this.gameObject.size.y + 2, false, true
          )
          .concat(
            this.gameObject.checkTrigger(
              this.gameObject.size.x / 2,
              -this.gameObject.size.y / 2 + 1,
              Math.round(this.velocity.x < 0 ? 0 : this.velocity.x),
              this.gameObject.size.y - 2, false, true
            )
          );
        if (rightArray.length > 0) {
          this.velocity.x = 0;
        }

        //left
        let leftArray = this.gameObject
          .checkTrigger(
            -this.gameObject.size.x / 2,
            this.gameObject.size.y / 2 - 1,
            Math.round(this.velocity.x > 0 ? 0 : this.velocity.x),
            -this.gameObject.size.y + 2, false, true
          )
          .concat(
            this.gameObject.checkTrigger(
              -this.gameObject.size.x / 2,
              -this.gameObject.size.y / 2 + 1,
              Math.round(this.velocity.x > 0 ? 0 : this.velocity.x),
              this.gameObject.size.y - 2, false, true
            )
          );
        if (leftArray.length > 0) {
          this.velocity.x = 0;
        }
        this.gameObject.position.add(this.velocity.x, this.velocity.y);
      }
    }
  }

  unlink(){
    this.gameObject = undefined;
    delete this.gameObject;
  }

  getMass() {
    return this.mass;
  }
  setMass(mass) {
    this.mass = mass;
  }
}
