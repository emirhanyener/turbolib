import { config } from "./Config.js";
import { GameObject } from "./GameObject.js";
import { Position } from "./Position.js";
import { Size } from "./Size.js";
import { Physics } from "Physics.js";
import { GameObjects } from "./GameObjects.js";

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width;
canvas.height = config.canvas.height;

export let gameObjects = new GameObjects();
let physics = [];

setInterval(() => {
    run();
}, 10);

function run(){
    gameObjects.getGameObjects().forEach(element => {
        ctx.fillRect(element.position.x, element.position.y, element.size.x, element.size.y);
    });
}