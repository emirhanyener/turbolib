import { config, GameObject, Position, Size, Physics, Resources, ImageObject } from "./index.js"

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width * config.canvas.resolution_multipler;
canvas.height = config.canvas.height * config.canvas.resolution_multipler;

ctx.scale(config.canvas.resolution_multipler, config.canvas.resolution_multipler);

canvas.style.width = (config.canvas.width) + "px";
canvas.style.height = (config.canvas.height) + "px";

export let resources = new Resources();
export let physics = [];
export let time = 0;

async function getImages(){
    let res =  await fetch(config.images_path + './images.json');
    let images = await res.json();
    return images;
}

let fetch_data = await getImages();
fetch_data.images.forEach((item) => resources.addImage(new ImageObject(item.src, item.name)));
fetch_data.animations.forEach((item) => resources.createAnimation(item.name, item.images, item.speed));

setInterval(() => {
    run();
}, 10);

function run(){
    time++;
    ctx.fillStyle = config.canvas.background_color;
    ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
    resources.getGameObjects().forEach(element => {
        ctx.fillStyle = "#000000";
        if(element.image)
            ctx.drawImage(element.image.getImage(), element.position.x - element.size.x / 2, element.position.y - element.size.y / 2, element.size.x, element.size.y) 
        else{
            if(element.color)
                ctx.fillStyle = element.color;
                ctx.fillRect(element.position.x - element.size.x / 2, element.position.y - element.size.y / 2, element.size.x, element.size.y);
        }
    });
    physics.forEach(element => {
        element.calculate();
    });
}