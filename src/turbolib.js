import {
  config,
  KeyController,
  KeyManager,
  GameObject,
  Vector,
  Physics,
  Resources,
  ImageObject,
  ObjectFunction,
} from "./index.js";

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

updateCanvasSize();

export function updateCanvasSize() {
  canvas.width = config.canvas.width * config.canvas.resolution_multipler;
  canvas.height = config.canvas.height * config.canvas.resolution_multipler;
  canvas.style.width =
    config.canvas.width * config.canvas.resolution_multipler + "px";
  canvas.style.height =
    config.canvas.height * config.canvas.resolution_multipler + "px";
  ctx.scale(
    config.canvas.resolution_multipler,
    config.canvas.resolution_multipler
  );
}

ctx.scale(
  config.canvas.resolution_multipler,
  config.canvas.resolution_multipler
);

canvas.style.width = config.canvas.width + "px";
canvas.style.height = config.canvas.height + "px";

export let resources = new Resources();
export let physics = [];
export let functions = [];

export function loadScene(scene) {
  resources.scene = scene;
}

async function getImages() {
  let res = await fetch(config.images_path + "./images.json");
  let images = await res.json();
  return images;
}

let fetch_data = await getImages();
fetch_data.images.forEach((item) =>
  resources.addImage(new ImageObject(item.src, item.name))
);
if (fetch_data.animations) {
  fetch_data.animations.forEach((item) => {
    resources.createAnimation(item.name, item.images, item.speed);
    if (item.loop) resources.findImage(item.name).setLoop(item.loop);
    if (item.flipVertical)
      resources.findImage(item.name).setFlipVertical(item.flipVertical);
    if (item.flipHorizontal)
      resources.findImage(item.name).setFlipHorizontal(item.flipHorizontal);
  });
}

export function addGlobalFunction(fn) {
  functions.push(fn);
}

setInterval(() => {
  run();
}, 10);

document.addEventListener("touchstart", mouseClickingUpdateFinger);
document.addEventListener("touchend", mouseClickingUpdateFinger);
document.addEventListener("touchmove", mousePositionUpdateFinger);

document.addEventListener("mousemove", mousePositionUpdate);
document.addEventListener("mousedown", mouseClickingUpdate);
document.addEventListener("mouseup", mouseClickingUpdate);

document.addEventListener("keydown", KeyController.keyDownEvent);
document.addEventListener("keyup", KeyController.keyUpEvent);

function mousePositionUpdateFinger(e) {
  resources.mouse.canvasPosition.update(
    e.changedTouches[0].clientX,
    e.changedTouches[0].clientY
  );
}
function mousePositionUpdate(e) {
  resources.mouse.canvasPosition.update(e.clientX, e.clientY);
}
function mouseClickingUpdateFinger(e) {
  if (e.touches.length > 0) resources.mouse.isPointerDown = true;
  else resources.mouse.isPointerDown = false;
}
function mouseClickingUpdate(e) {
  if (e.buttons == 0) resources.mouse.isPointerDown = false;
  else resources.mouse.isPointerDown = true;
}

function run() {
  resources.gameTime += 10;
  ctx.fillStyle = config.canvas.background_color;
  if (config.canvas.background == "")
    ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
  else
    ctx.drawImage(
      resources.findImage(config.canvas.background).image[0],
      0,
      0,
      config.canvas.width,
      config.canvas.height
    );
  resources.scene.getGameObjects().forEach((element) => {
    if (element.active) {
      ctx.fillStyle = "#000000";
      if (element.image) {
        ctx.save();
        ctx.translate((element.position.x - resources.scene.getMainCamera().getPosition().x), +(element.position.y - resources.scene.getMainCamera().getPosition().y));
        ctx.rotate(element.rotationZ*Math.PI/180);
        ctx.translate(-(element.position.x - resources.scene.getMainCamera().getPosition().x), -(element.position.y - resources.scene.getMainCamera().getPosition().y));

        ctx.scale(
          1 * element.image.getFlipHorizontal(),
          1 * element.image.getFlipVertical()
        );

        ctx.drawImage(
          element.image.getImage(),
          (element.image.getFlipHorizontal() *
            (element.position.x -
              element.size.x / 2 +
              (element.image.flipHorizontal
                ? element.size.x -
                  2 * resources.scene.getMainCamera().getPosition().x
                : 0)) -
            resources.scene.getMainCamera().getPosition().x) *
            resources.scene.getMainCamera().getZoom() +
            (config.canvas.width / 2) *
              (1 - resources.scene.getMainCamera().getZoom()) *
              element.image.getFlipHorizontal(),
          (element.image.getFlipVertical() *
            (element.position.y -
              element.size.y / 2 +
              (element.image.flipVertical
                ? element.size.y -
                  2 * resources.scene.getMainCamera().getPosition().y
                : 0)) -
            resources.scene.getMainCamera().getPosition().y) *
            resources.scene.getMainCamera().getZoom() +
            (config.canvas.height / 2) *
              (1 - resources.scene.getMainCamera().getZoom()) *
              element.image.getFlipVertical(),
          element.size.x * resources.scene.getMainCamera().getZoom(),
          element.size.y * resources.scene.getMainCamera().getZoom()
        );

        ctx.scale(
          1 * element.image.getFlipHorizontal(),
          1 * element.image.getFlipVertical()
        );
        
        ctx.restore();
      } else {
        if (element.color) {
          ctx.fillStyle = element.color;
        }
        ctx.save();
        ctx.translate((element.position.x - resources.scene.getMainCamera().getPosition().x), +(element.position.y - resources.scene.getMainCamera().getPosition().y));
        ctx.rotate(element.rotationZ*Math.PI/180);
        ctx.translate(-(element.position.x - resources.scene.getMainCamera().getPosition().x), -(element.position.y - resources.scene.getMainCamera().getPosition().y));
        
        ctx.fillRect(
          (element.position.x -
            element.size.x / 2 -
            resources.scene.getMainCamera().getPosition().x) *
            resources.scene.getMainCamera().getZoom() +
            (config.canvas.width / 2) *
              (1 - resources.scene.getMainCamera().getZoom()),
          (element.position.y -
            element.size.y / 2 -
            resources.scene.getMainCamera().getPosition().y) *
            resources.scene.getMainCamera().getZoom() +
            (config.canvas.height / 2) *
              (1 - resources.scene.getMainCamera().getZoom()),
          element.size.x * resources.scene.getMainCamera().getZoom(),
          element.size.y * resources.scene.getMainCamera().getZoom()
        );
        ctx.restore();
      }
    }
  });
  resources.scene.getUI().forEach((element) => {
    if (element.active) {
      element.drawUI(ctx);
    }
  });
  physics.forEach((element) => {
    element.calculate();
  });
  functions.forEach((element) => {
    element.run();
  });
  let alertIndex = 1;
  ctx.font = "14px Arial";
  if (resources.alertManager.alerts.length > 0) {
    if (
      resources.alertManager.alerts[0].time + resources.alertManager.delayTime <
      resources.gameTime
    ) {
      resources.alertManager.removeFirstAlert();
    }
  }
  resources.alertManager.alerts.forEach((element) => {
    ctx.fillStyle = element.color;
    ctx.fillText(element.text, 0, alertIndex * 18);
    alertIndex++;
  });
}

function deg2Rad(deg){
  return (deg * (Math.PI / 180));
}
function rad2Deg(rad){
  return (rad * (180 / Math.PI));
}
