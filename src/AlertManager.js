import { Alert } from "./index.js";

export class AlertManager {
    constructor() {
        this.alerts = [];
        this.delayTime;
    }

    addAlert(text, time){
        this.alerts.push(new Alert(text, time));
    }
}