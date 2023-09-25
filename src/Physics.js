import { config, UILine, Vector, resources } from "./index.js";

export class Physics {
  constructor(gameObject) {
    this.gameObject = gameObject;
    this.velocity = new Vector(0, 0);
    this.mass = 1;
    this.isGrounded = false;
    this.bounceRate = 0;
    this.isVisible = false;
  }

  calculate() {
    //down
    let downArray = this.gameObject
      .checkTrigger(
        -this.gameObject.size.x / 2,
        this.gameObject.size.y / 2,
        this.gameObject.size.x,
        Math.round(this.velocity.y < 0 ? 0 : this.velocity.y)
      )
      .concat(
        this.gameObject.checkTrigger(
          this.gameObject.size.x / 2,
          this.gameObject.size.y / 2,
          -this.gameObject.size.x,
          Math.round(this.velocity.y < 0 ? 0 : this.velocity.y)
        )
      );
    if (downArray.length == 0) {
      this.isGrounded = false;
      this.velocity.add(0, (this.mass * config.gravity) / 100);
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
        Math.round(this.velocity.y > 0 ? 0 : this.velocity.y)
      )
      .concat(
        this.gameObject.checkTrigger(
          this.gameObject.size.x / 2,
          -this.gameObject.size.y / 2,
          -this.gameObject.size.x,
          Math.round(this.velocity.y > 0 ? 0 : this.velocity.y)
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
        -this.gameObject.size.y + 2
      )
      .concat(
        this.gameObject.checkTrigger(
          this.gameObject.size.x / 2,
          -this.gameObject.size.y / 2 + 1,
          Math.round(this.velocity.x < 0 ? 0 : this.velocity.x),
          this.gameObject.size.y - 2
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
        -this.gameObject.size.y + 2
      )
      .concat(
        this.gameObject.checkTrigger(
          -this.gameObject.size.x / 2,
          -this.gameObject.size.y / 2 + 1,
          Math.round(this.velocity.x > 0 ? 0 : this.velocity.x),
          this.gameObject.size.y - 2
        )
      );
    if (leftArray.length > 0) {
      this.velocity.x = 0;
    }
    this.gameObject.position.add(this.velocity.x, this.velocity.y);
  }

  getMass() {
    return this.mass;
  }
  setMass(mass) {
    this.mass = mass;
  }
}
