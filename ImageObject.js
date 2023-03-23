export class ImageObject{
    constructor(src, name){
        this.image = new Image();
        this.image.src = src;
        this.name = name;
    }
}