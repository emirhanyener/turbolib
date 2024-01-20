export class ColorGameobject{
    constructor(){
        this.dictionary = [];
    }

    add(rgb, instance){
        this.dictionary.push({color: {r: rgb.r, g: rgb.g, b: rgb.b}, instance: instance});
    }
    getGameObject(rgb){
        for (let index = 0; index < this.dictionary.length; index++) {
            if(this.dictionary[index].color.r == rgb.r && this.dictionary[index].color.g == rgb.g && this.dictionary[index].color.b == rgb.b){
                return this.dictionary[index].instance;
            }
        }
    }
}