export class Particle {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.color = "#333333";
    this.delay = 0.1;
    this.particleTime = 1;
    this.angle = 360;
    this.start = 0;
    this.active = true;
    this.particles = [];
  }
}
