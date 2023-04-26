import {
  config,
  GameObject,
  Vector,
  Physics,
  Resources,
  ImageObject,
} from "./index.js";

let canvas = document.getElementById(config.canvas.id);
let ctx = canvas.getContext("2d");

canvas.width = config.canvas.width * config.canvas.resolution_multipler;
canvas.height = config.canvas.height * config.canvas.resolution_multipler;

ctx.scale(
  config.canvas.resolution_multipler,
  config.canvas.resolution_multipler
);

canvas.style.width = config.canvas.width + "px";
canvas.style.height = config.canvas.height + "px";

export let resources = new Resources();
export let physics = [];
export let time = 0;

async function getImages() {
  let res = await fetch(config.images_path + "./images.json");
  let images = await res.json();
  return images;
}

let fetch_data = await getImages();
fetch_data.images.forEach((item) =>
  resources.addImage(new ImageObject(item.src, item.name))
);
if(fetch_data.animations){
  fetch_data.animations.forEach((item) => {
    resources.createAnimation(item.name, item.images, item.speed);
    if (item.flipVertical) resources.findImage(item.name).changeFlipVertical();
    if (item.flipHorizontal)
      resources.findImage(item.name).changeFlipHorizontal();
  });
}

setInterval(() => {
  run();
}, 10);


canvas.addEventListener("mousemove", mousePositionUpdate);
canvas.addEventListener("mousedown", mouseClickingUpdate);
canvas.addEventListener("mouseup", mouseClickingUpdate);

function mousePositionUpdate(e){
  resources.mouse.canvasPosition.update(e.clientX, e.clientY);
}
function mouseClickingUpdate(e){
  if(e.buttons == 0)
    resources.mouse.isPointerDown = false;
  else
    resources.mouse.isPointerDown = true;
}

function run() {
  time++;
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
  resources.getGameObjects().forEach((element) => {
    if(element.active){
      ctx.fillStyle = "#000000";
      if (element.image) {
        ctx.scale(
          1 * element.image.getFlipHorizontal(),
          1 * element.image.getFlipVertical()
        );
        ctx.drawImage(
          element.image.getImage(),
          element.image.getFlipHorizontal() *
            (element.position.x -
              element.size.x / 2 +
              (element.image.flipHorizontal
                ? element.size.x - 2 * resources.getMainCamera().getPosition().x
                : 0)) -
            resources.getMainCamera().getPosition().x,
          element.image.getFlipVertical() *
            (element.position.y -
              element.size.y / 2 +
              (element.image.flipVertical
                ? element.size.y - 2 * resources.getMainCamera().getPosition().y
                : 0)) -
            resources.getMainCamera().getPosition().y,
          element.size.x,
          element.size.y
        );
        ctx.scale(
          1 * element.image.getFlipHorizontal(),
          1 * element.image.getFlipVertical()
        );
      } else {
        if (element.color) {
          ctx.fillStyle = element.color;
        }
        ctx.fillRect(
          element.position.x -
            element.size.x / 2 -
            resources.getMainCamera().getPosition().x,
          element.position.y -
            element.size.y / 2 -
            resources.getMainCamera().getPosition().y,
          element.size.x,
          element.size.y
        );
      }
    }
  });
  resources.getUI().forEach((element) => {
    if(element.active){
      element.drawUI(ctx);
    }
  });
  physics.forEach((element) => {
    element.calculate();
  });
}
