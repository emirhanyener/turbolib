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

  visible() {
    resources.addUI(new UILine("downLeftLine", new Vector(0, 0)));
    resources.addUI(new UILine("downRightLine", new Vector(0, 0)));
    resources.addUI(new UILine("upLeftLine", new Vector(0, 0)));
    resources.addUI(new UILine("upRightLine", new Vector(0, 0)));

    resources.addUI(new UILine("rightUpLine", new Vector(0, 0)));
    resources.addUI(new UILine("rightDownLine", new Vector(0, 0)));
    resources.addUI(new UILine("leftUpLine", new Vector(0, 0)));
    resources.addUI(new UILine("leftDownLine", new Vector(0, 0)));

    resources.findUI("downLeftLine").gameWorld = true;
    resources.findUI("downRightLine").gameWorld = true;
    resources.findUI("upLeftLine").gameWorld = true;
    resources.findUI("upRightLine").gameWorld = true;

    resources.findUI("rightUpLine").gameWorld = true;
    resources.findUI("rightDownLine").gameWorld = true;
    resources.findUI("leftUpLine").gameWorld = true;
    resources.findUI("leftDownLine").gameWorld = true;

    this.isVisible = !this.isVisible;
  }

  calculate() {
    this.gameObject.position.add(this.velocity.x, this.velocity.y);
    if (this.isVisible) {
      resources
        .findUI("downLeftLine")
        .updateFromTo(
          this.gameObject.position.x - this.gameObject.size.x / 2,
          this.gameObject.position.y + this.gameObject.size.y / 2,
          this.gameObject.position.x + this.gameObject.size.x / 2,
          this.gameObject.position.y +
            this.gameObject.size.y / 2 +
            Math.round(this.velocity.y < 0 ? 0 : this.velocity.y)
        );
      resources
        .findUI("downRightLine")
        .updateFromTo(
          this.gameObject.position.x + this.gameObject.size.x / 2,
          this.gameObject.position.y + this.gameObject.size.y / 2,
          this.gameObject.position.x - this.gameObject.size.x / 2,
          this.gameObject.position.y +
            this.gameObject.size.y / 2 +
            Math.round(this.velocity.y < 0 ? 0 : this.velocity.y)
        );
      resources
        .findUI("upLeftLine")
        .updateFromTo(
          this.gameObject.position.x - this.gameObject.size.x / 2,
          this.gameObject.position.y - this.gameObject.size.y / 2,
          this.gameObject.position.x + this.gameObject.size.x / 2,
          this.gameObject.position.y -
            this.gameObject.size.y / 2 +
            Math.round(this.velocity.y > 0 ? 0 : this.velocity.y)
        );
      resources
        .findUI("upRightLine")
        .updateFromTo(
          this.gameObject.position.x + this.gameObject.size.x / 2,
          this.gameObject.position.y - this.gameObject.size.y / 2,
          this.gameObject.position.x - this.gameObject.size.x / 2,
          this.gameObject.position.y -
            this.gameObject.size.y / 2 +
            Math.round(this.velocity.y > 0 ? 0 : this.velocity.y)
        );
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
      this.gameObject.position.x =
        rightArray[0].position.x -
        rightArray[0].size.x / 2 -
        this.gameObject.size.x / 2;
    }

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
  }

  getMass() {
    return this.mass;
  }
  setMass(mass) {
    this.mass = mass;
  }
}
