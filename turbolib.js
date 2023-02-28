import { config } from "./Settings.js";

let canvas = document.getElementById(config.canvas_object_id);
let ctx = canvas.getContext("2d");

setInterval(() => {
    run();
}, 10);

function run(){

}