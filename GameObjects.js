export class GameObjects{
    constructor(){
        this.gameobjects = [];
    }
    getGameObjects(){
        return this.gameobjects;
    }
    addGameObject(gameObject){
        this.gameobjects.push(gameObject);
    }
}