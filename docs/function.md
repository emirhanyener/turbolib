# Function
## About
Functions are used to make repeated code reusable. There are two types, ObjectFunction, which can be used by assigning to an object, and Function for general use.

## Using Functions
### Object Function
By assigning a function to the object, it makes the assigned object easier to use. The following code allows to set the size of the assigned object.
```javascript
//Create derived class
class SizeDownObjectFunction extends ObjectFunction{
  run(){
    this.gameobject.size.x = 10;
  }
}
//Assign function to GameObject
GameObject.find(GameObjectName).addFunction(new SizeDownFunction());
```
`GameObjectName`: The name of the UI element that has been added.

### Global Function
It is used to assign functions globally.
- Note: The `addGlobalFunction` method must be imported.
```javascript
//Import addGlobalFunction
import { addGlobalFunction } from "turbolib.js";
//Create derived class
class GlobalFunction extends Function{
  run(){
    GameObject.find(GameObjectName).size.x = 10;
  }
}
//Assign function to Global
addGlobalFunction(new GlobalFunction());
```
`GameObjectName`: The name of the UI element that has been added.