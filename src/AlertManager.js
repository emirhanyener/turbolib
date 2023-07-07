import { Alert } from "./index.js";

export class AlertManager {
  constructor() {
    this.alerts = [];
    this.maxAlert = 3;
    this.delayTime;
  }

  addAlert(text, time, color) {
    if (this.alerts.length > this.maxAlert) {
      this.removeFirstAlert();
    }
    this.alerts.push(new Alert(text, time, color));
  }

  removeFirstAlert() {
    this.alerts.shift();
  }
}
