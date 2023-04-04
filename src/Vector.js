export class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    update(x, y){
        this.x = x;
        this.y = y;
    }

    add(x, y){
        this.x += x;
        this.y += y;
    }

    scale(scale){
        this.x = x * scale;
        this.y = y * scale;
    }
}