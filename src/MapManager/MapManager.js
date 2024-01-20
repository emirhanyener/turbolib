import { ImageConverter, ColorGameobject } from "../index.js";

export class MapManager{
    constructor(gap = 100){
        this.gap = gap;
    }

    load(scene, src, dict){
        const imageConverter = new ImageConverter(src, () => {
            for (let y = 0; y < imageConverter.pixels.length; y++) {
                for (let x = 0; x < imageConverter.pixels[y].length; x++) {
                    const selectedObject = dict.getGameObject(imageConverter.getPixel(x, y));
                    if(selectedObject){
                        const clonedObject = selectedObject.clone();
                        clonedObject.position.update(x * this.gap, y * this.gap);
                        scene.addGameObject(clonedObject);
                    }
                }
            }
        });
    }
}