export class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    /**
     * Set new vector param.
     * @param {int} x 
     * @param {int} y 
     */
    update(x, y){
        this.x = x;
        this.y = y;
    }

    /**
     * Sum current vector and param.
     * @param {int} x 
     * @param {int} y 
     */
    add(x, y){
        this.x += x;
        this.y += y;
    }

    /**
     * Multiply current vector with scale param.
     * @param {int} scale 
     */
    scale(scale){
        this.x = x * scale;
        this.y = y * scale;
    }
}