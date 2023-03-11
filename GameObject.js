export class GameObject{
    constructor(name, position, size){
        this.name = name;
        this.position = position;
        this.size = size;
    }

    setSize(x, y){
        this.size = new Size;
    }
    setPosition(x, y){
        this.position = new Position(x, y);
    }
}