import { config } from "./../index.js";

export class ImageConverter {
  constructor(src, callback) {
    this.pixels = [];
    this.callback = callback;
    this.image = new Image();
    this.image.src = config.path + src;
    this.image.onload = () => this.initImagePixels();
  }

  getPixel(x, y) {
    return this.pixels[y][x];
  }

  initImagePixels() {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = this.image.width;
    canvas.height = this.image.height;

    context.drawImage(this.image, 0, 0, this.image.width, this.image.height);

    var imageData = context.getImageData(
      0,
      0,
      this.image.width,
      this.image.height
    );

    for (var y = 0; y < this.image.height; y++) {
      var row = [];
      for (var x = 0; x < this.image.width; x++) {
        var index = (y * this.image.width + x) * 4;
        var r = imageData.data[index];
        var g = imageData.data[index + 1];
        var b = imageData.data[index + 2];
        var a = imageData.data[index + 3];
        row.push({ r: r, g: g, b: b, a: a });
      }
      this.pixels.push(row);
    }

    this.callback();
  }
}
