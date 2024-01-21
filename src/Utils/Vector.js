export class Vector{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Set new vector param.
   * @param {int} x
   * @param {int} y
   */
  update(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Sum current vector and param.
   * @param {int} x
   * @param {int} y
   */
  add(x, y) {
    this.x += x;
    this.y += y;

    return this;
  }

  /**
   * Multiply current vector with vector param.
   * @param {Vector} scale
   */
  multiple(vector) {
    this.x = x * vector.x;
    this.y = y * vector.y;

    return this;
  }

  /**
   * Multiply current vector with scale param.
   * @param {int} scale
   */
  multipleScalar(scale) {
    this.x = x * scale;
    this.y = y * scale;

    return this;
  }
}
