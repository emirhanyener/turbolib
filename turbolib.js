import { config, GameObject, Position, Size, Physics, Resources, ImageObject } from "./index.js"

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width;
canvas.height = config.canvas.height;

export let resources = new Resources();
export let physics = [];
export let time = 0;

async function getImages(){
    let res =  await fetch('./images.json');
    let images = await res.json();
    return images;
}

let test = await getImages();
test.images.forEach((item) => resources.addImage(new ImageObject(item.src, item.name)));

setInterval(() => {
    run();
}, 10);

function run(){
    time++;
    ctx.fillStyle = config.canvas.background_color;
    ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
    ctx.fillStyle = "#000000";
    resources.getGameObjects().forEach(element => {
        if(element.image)
            ctx.drawImage(element.image.getImage(), element.position.x - element.size.x / 2, element.position.y - element.size.y / 2, element.size.x, element.size.y)
        else
            ctx.fillRect(element.position.x - element.size.x / 2, element.position.y - element.size.y / 2, element.size.x, element.size.y);
    });
    physics.forEach(element => {
        element.calculate();
    });
}