export class Position{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    update(x, y){
        this.x = x;
        this.y = y;
    }
    add(x, y){
        this.x = this.x + x;
        this.y = this.y + y;
    }
}