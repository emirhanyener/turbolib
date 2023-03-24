import { physics, resources } from "./turbolib.js";
import { Physics } from "./Physics.js";

export class GameObject{
    constructor(name, position, size){
        this.name = name;
        this.position = position;
        this.size = size;
        this.image;
    }

    setImage(name){
        this.image = resources.findImage(name);
    }
    setSize(x, y){
        this.size = new Size;
    }
    setPosition(x, y){
        this.position = new Position(x, y);
    }
    addPhysics(){
        if(physics.find((physics) => physics.gameObject.name == this.name)){
            console.error("Physics already added");
        }
        else{
            physics.push(new Physics(this));
        }
    }
    getPhysics(){
        let temp = physics.find((physics) => physics.gameObject.name == this.name);

        if(temp){
            return temp;
        }

        console.error("Physics not found");
    }

    static find(name){
        return resources.findGameObject(name);
    }

    static create(name, position, size){
        return new GameObject(name, position, size);
    }

    destroy(){
        resources.getGameObjects().splice(gameObjects.getGameObjects().indexOf(this), 1);
    }

    checkTrigger(offsetX, offsetY, x, y) {
		let detectedObjects = [];
		let step = Math.round(Math.sqrt(Math.pow(x - offsetX, 2) + Math.pow(y - offsetY, 2)));

		for (let i = 0; i < step + 2; i++) {
			resources.getGameObjects().forEach((item) => {
				if (item == this) {
					return;
				}
				if (this.position.getX() + offsetX + (x / step) * i > item.position.getX() - item.size.getWidth() / 2) {
					if (this.position.getX() + offsetX + (x / step) * i < item.position.getX() + item.size.getWidth() / 2) {
						if (this.position.getY() + offsetY + (y / step) * i > item.position.getY() - item.size.getHeight() / 2) {
							if (this.position.getY() + offsetY + (y / step) * i < item.position.getY() + item.size.getHeight() / 2) {
								detectedObjects.push(item);
							}
						}
					}
				}
			});
		}
		return detectedObjects;
	}
}