import { config } from "./Config.js";
import GameObject from "./GameObject.js";

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width;
canvas.height = config.canvas.height;

setInterval(() => {
    run();
}, 10);

function run(){

}