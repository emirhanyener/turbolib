import { config } from "./Config.js";
import { GameObject } from "./GameObject.js";
import { Position } from "./Position.js";
import { Size } from "./Size.js";
import { Physics } from "./Physics.js";
import { GameObjects } from "./GameObjects.js";

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width;
canvas.height = config.canvas.height;

export let gameObjects = new GameObjects();
export let physics = [];

setInterval(() => {
    run();
}, 10);

function run(){
    ctx.fillStyle = config.canvas.background_color;
    ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
    ctx.fillStyle = "#000000";
    gameObjects.getGameObjects().forEach(element => {
        ctx.fillRect(element.position.x - element.size.x / 2, element.position.y - element.size.y / 2, element.size.x, element.size.y);
    });
    physics.forEach(element => {
        element.calculate();
    });
}