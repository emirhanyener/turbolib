export class Physics{
    constructor(gameObject){
        this.gameObject = gameObject;
        this.velocity = new Velocity(0, 0);
        this.mass = 0;
    }

    calculate(){
        this.gameObject.position.add(this.velocity.x, this.velocity.y);
    }
}