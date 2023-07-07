import { KeyManager } from "./index.js";

export class KeyController {
  static keyDownEvent(event) {
    switch (event.code) {
      //Char Keys
      case "KeyA":
        KeyManager.KeyA = true;
        break;
      case "KeyB":
        KeyManager.KeyB = true;
        break;
      case "KeyC":
        KeyManager.KeyC = true;
        break;
      case "KeyD":
        KeyManager.KeyD = true;
        break;
      case "KeyE":
        KeyManager.KeyE = true;
        break;
      case "KeyF":
        KeyManager.KeyF = true;
        break;
      case "KeyG":
        KeyManager.KeyG = true;
        break;
      case "KeyH":
        KeyManager.KeyH = true;
        break;
      case "KeyI":
        KeyManager.KeyI = true;
        break;
      case "KeyJ":
        KeyManager.KeyJ = true;
        break;
      case "KeyK":
        KeyManager.KeyK = true;
        break;
      case "KeyL":
        KeyManager.KeyL = true;
        break;
      case "KeyM":
        KeyManager.KeyM = true;
        break;
      case "KeyN":
        KeyManager.KeyN = true;
        break;
      case "KeyO":
        KeyManager.KeyO = true;
        break;
      case "KeyP":
        KeyManager.KeyP = true;
        break;
      case "KeyQ":
        KeyManager.KeyQ = true;
        break;
      case "KeyR":
        KeyManager.KeyR = true;
        break;
      case "KeyS":
        KeyManager.KeyS = true;
        break;
      case "KeyT":
        KeyManager.KeyT = true;
        break;
      case "KeyU":
        KeyManager.KeyU = true;
        break;
      case "KeyV":
        KeyManager.KeyV = true;
        break;
      case "KeyW":
        KeyManager.KeyW = true;
        break;
      case "KeyX":
        KeyManager.KeyX = true;
        break;
      case "KeyY":
        KeyManager.KeyY = true;
        break;
      case "KeyZ":
        KeyManager.KeyZ = true;
        break;

      //Number Keys
      case "Digit0":
        KeyManager.Key0 = true;
        break;
      case "Digit1":
        KeyManager.Key1 = true;
        break;
      case "Digit2":
        KeyManager.Key2 = true;
        break;
      case "Digit3":
        KeyManager.Key3 = true;
        break;
      case "Digit4":
        KeyManager.Key4 = true;
        break;
      case "Digit5":
        KeyManager.Key5 = true;
        break;
      case "Digit6":
        KeyManager.Key6 = true;
        break;
      case "Digit7":
        KeyManager.Key7 = true;
        break;
      case "Digit8":
        KeyManager.Key8 = true;
        break;
      case "Digit9":
        KeyManager.Key9 = true;
        break;

      //Number Keys
      case "Numpad0":
        KeyManager.KeyNum0 = true;
        break;
      case "Numpad1":
        KeyManager.KeyNum1 = true;
        break;
      case "Numpad2":
        KeyManager.KeyNum2 = true;
        break;
      case "Numpad3":
        KeyManager.KeyNum3 = true;
        break;
      case "Numpad4":
        KeyManager.KeyNum4 = true;
        break;
      case "Numpad5":
        KeyManager.KeyNum5 = true;
        break;
      case "Numpad6":
        KeyManager.KeyNum6 = true;
        break;
      case "Numpad7":
        KeyManager.KeyNum7 = true;
        break;
      case "Numpad8":
        KeyManager.KeyNum8 = true;
        break;
      case "Numpad9":
        KeyManager.KeyNum9 = true;
        break;

      //Symbol Keys
      case "NumpadMultiply":
        KeyManager.KeyNumMultiply = true;
        break;
      case "NumpadAdd":
        KeyManager.KeyNumAdd = true;
        break;
      case "NumpadDivide":
        KeyManager.KeyNumDivide = true;
        break;
      case "NumpadSubtract":
        KeyManager.KeyNumSubtract = true;
        break;
      case "NumpadDecimal":
        KeyManager.KeyNumDecimal = true;
        break;

      //Function Keys
      case "F1":
        KeyManager.KeyF1 = true;
        break;
      case "F2":
        KeyManager.KeyF2 = true;
        break;
      case "F3":
        KeyManager.KeyF3 = true;
        break;
      case "F4":
        KeyManager.KeyF4 = true;
        break;
      case "F5":
        KeyManager.KeyF5 = true;
        break;
      case "F6":
        KeyManager.KeyF6 = true;
        break;
      case "F7":
        KeyManager.KeyF7 = true;
        break;
      case "F8":
        KeyManager.KeyF8 = true;
        break;
      case "F9":
        KeyManager.KeyF9 = true;
        break;
      case "F10":
        KeyManager.KeyF10 = true;
        break;
      case "F11":
        KeyManager.KeyF11 = true;
        break;
      case "F12":
        KeyManager.KeyF12 = true;
        break;

      //Arrow Keys
      case "ArrowRight":
        KeyManager.KeyRight = true;
        break;
      case "ArrowLeft":
        KeyManager.KeyLeft = true;
        break;
      case "ArrowUp":
        KeyManager.KeyUp = true;
        break;
      case "ArrowDown":
        KeyManager.KeyDown = true;
        break;

      //Special Keys
      case "Space":
        KeyManager.KeySpace = true;
        break;
      case "Backspace":
        KeyManager.KeyBackSpace = true;
        break;
      case "Escape":
        KeyManager.KeyEscape = true;
        break;
      case "ScrollLock":
        KeyManager.KeyScrollLock = true;
        break;
      case "Pause":
        KeyManager.KeyPause = true;
        break;
      case "Delete":
        KeyManager.KeyDelete = true;
        break;
      case "Home":
        KeyManager.KeyHome = true;
        break;
      case "PageUp":
        KeyManager.KeyPageUp = true;
        break;
      case "PageDown":
        KeyManager.KeyPageDown = true;
        break;
      case "End":
        KeyManager.KeyEnd = true;
        break;
      case "Tab":
        KeyManager.KeyTab = true;
        break;
      case "CapsLock":
        KeyManager.KeyCapsLock = true;
        break;
      case "NumLock":
        KeyManager.KeyNumLock = true;
        break;
      case "Enter":
        KeyManager.KeyEnter = true;
        break;

      //Control Keys
      case "ShiftLeft":
        KeyManager.KeyLeftShift = true;
        break;
      case "ShiftRight":
        KeyManager.KeyRightShift = true;
        break;
      case "ControlLeft":
        KeyManager.KeyLeftControl = true;
        break;
      case "ControlRight":
        KeyManager.KeyRightControl = true;
        break;
      case "AltLeft":
        KeyManager.KeyLeftAlt = true;
        break;
      case "AltRight":
        KeyManager.KeyRightAlt = true;
        break;
      default:
        break;
    }
  }
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  //Key Up
  static keyUpEvent(event) {
    switch (event.code) {
      //Char Keys
      case "KeyA":
        KeyManager.KeyA = false;
        break;
      case "KeyB":
        KeyManager.KeyB = false;
        break;
      case "KeyC":
        KeyManager.KeyC = false;
        break;
      case "KeyD":
        KeyManager.KeyD = false;
        break;
      case "KeyE":
        KeyManager.KeyE = false;
        break;
      case "KeyF":
        KeyManager.KeyF = false;
        break;
      case "KeyG":
        KeyManager.KeyG = false;
        break;
      case "KeyH":
        KeyManager.KeyH = false;
        break;
      case "KeyI":
        KeyManager.KeyI = false;
        break;
      case "KeyJ":
        KeyManager.KeyJ = false;
        break;
      case "KeyK":
        KeyManager.KeyK = false;
        break;
      case "KeyL":
        KeyManager.KeyL = false;
        break;
      case "KeyM":
        KeyManager.KeyM = false;
        break;
      case "KeyN":
        KeyManager.KeyN = false;
        break;
      case "KeyO":
        KeyManager.KeyO = false;
        break;
      case "KeyP":
        KeyManager.KeyP = false;
        break;
      case "KeyQ":
        KeyManager.KeyQ = false;
        break;
      case "KeyR":
        KeyManager.KeyR = false;
        break;
      case "KeyS":
        KeyManager.KeyS = false;
        break;
      case "KeyT":
        KeyManager.KeyT = false;
        break;
      case "KeyU":
        KeyManager.KeyU = false;
        break;
      case "KeyV":
        KeyManager.KeyV = false;
        break;
      case "KeyW":
        KeyManager.KeyW = false;
        break;
      case "KeyX":
        KeyManager.KeyX = false;
        break;
      case "KeyY":
        KeyManager.KeyY = false;
        break;
      case "KeyZ":
        KeyManager.KeyZ = false;
        break;

      //Number Keys
      case "Digit0":
        KeyManager.Key0 = false;
        break;
      case "Digit1":
        KeyManager.Key1 = false;
        break;
      case "Digit2":
        KeyManager.Key2 = false;
        break;
      case "Digit3":
        KeyManager.Key3 = false;
        break;
      case "Digit4":
        KeyManager.Key4 = false;
        break;
      case "Digit5":
        KeyManager.Key5 = false;
        break;
      case "Digit6":
        KeyManager.Key6 = false;
        break;
      case "Digit7":
        KeyManager.Key7 = false;
        break;
      case "Digit8":
        KeyManager.Key8 = false;
        break;
      case "Digit9":
        KeyManager.Key9 = false;
        break;

      //Number Keys
      case "Numpad0":
        KeyManager.KeyNum0 = false;
        break;
      case "Numpad1":
        KeyManager.KeyNum1 = false;
        break;
      case "Numpad2":
        KeyManager.KeyNum2 = false;
        break;
      case "Numpad3":
        KeyManager.KeyNum3 = false;
        break;
      case "Numpad4":
        KeyManager.KeyNum4 = false;
        break;
      case "Numpad5":
        KeyManager.KeyNum5 = false;
        break;
      case "Numpad6":
        KeyManager.KeyNum6 = false;
        break;
      case "Numpad7":
        KeyManager.KeyNum7 = false;
        break;
      case "Numpad8":
        KeyManager.KeyNum8 = false;
        break;
      case "Numpad9":
        KeyManager.KeyNum9 = false;
        break;

      //Symbol Keys
      case "NumpadMultiply":
        KeyManager.KeyNumMultiply = false;
        break;
      case "NumpadAdd":
        KeyManager.KeyNumAdd = false;
        break;
      case "NumpadDivide":
        KeyManager.KeyNumDivide = false;
        break;
      case "NumpadSubtract":
        KeyManager.KeyNumSubtract = false;
        break;
      case "NumpadDecimal":
        KeyManager.KeyNumDecimal = false;
        break;

      //Function Keys
      case "F1":
        KeyManager.KeyF1 = false;
        break;
      case "F2":
        KeyManager.KeyF2 = false;
        break;
      case "F3":
        KeyManager.KeyF3 = false;
        break;
      case "F4":
        KeyManager.KeyF4 = false;
        break;
      case "F5":
        KeyManager.KeyF5 = false;
        break;
      case "F6":
        KeyManager.KeyF6 = false;
        break;
      case "F7":
        KeyManager.KeyF7 = false;
        break;
      case "F8":
        KeyManager.KeyF8 = false;
        break;
      case "F9":
        KeyManager.KeyF9 = false;
        break;
      case "F10":
        KeyManager.KeyF10 = false;
        break;
      case "F11":
        KeyManager.KeyF11 = false;
        break;
      case "F12":
        KeyManager.KeyF12 = false;
        break;

      //Arrow Keys
      case "ArrowRight":
        KeyManager.KeyRight = false;
        break;
      case "ArrowLeft":
        KeyManager.KeyLeft = false;
        break;
      case "ArrowUp":
        KeyManager.KeyUp = false;
        break;
      case "ArrowDown":
        KeyManager.KeyDown = false;
        break;

      //Special Keys
      case "Space":
        KeyManager.KeySpace = false;
        break;
      case "Backspace":
        KeyManager.KeyBackSpace = false;
        break;
      case "Escape":
        KeyManager.KeyEscape = false;
        break;
      case "ScrollLock":
        KeyManager.KeyScrollLock = false;
        break;
      case "Pause":
        KeyManager.KeyPause = false;
        break;
      case "Delete":
        KeyManager.KeyDelete = false;
        break;
      case "Home":
        KeyManager.KeyHome = false;
        break;
      case "PageUp":
        KeyManager.KeyPageUp = false;
        break;
      case "PageDown":
        KeyManager.KeyPageDown = false;
        break;
      case "End":
        KeyManager.KeyEnd = false;
        break;
      case "Tab":
        KeyManager.KeyTab = false;
        break;
      case "CapsLock":
        KeyManager.KeyCapsLock = false;
        break;
      case "NumLock":
        KeyManager.KeyNumLock = false;
        break;
      case "Enter":
        KeyManager.KeyEnter = false;
        break;

      //Control Keys
      case "ShiftLeft":
        KeyManager.KeyLeftShift = false;
        break;
      case "ShiftRight":
        KeyManager.KeyRightShift = false;
        break;
      case "ControlLeft":
        KeyManager.KeyLeftControl = false;
        break;
      case "ControlRight":
        KeyManager.KeyRightControl = false;
        break;
      case "AltLeft":
        KeyManager.KeyLeftAlt = false;
        break;
      case "AltRight":
        KeyManager.KeyRightAlt = false;
        break;
      default:
        break;
    }
  }
}
