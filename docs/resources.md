# Resources
## About
The resources variable is an object required for managing resources. With resources you can have control of gameobject objects and UI objects. The most used features are adjusting the camera and getting mouse position information.

## Import
```javascript
import { resources } from "turbolib/src/index.js";
```

## Variables
### Game Time
It contains the time of how long the game has been running in milliseconds.
```javascript
resources.gameTime;
```

## Methods
### Camera
#### setMainCamera
This method is used to add or update cameras in the game.
```javascript
scene.setMainCamera(cameraObject);
```
`cameraObject`: Camera or FollowerCamera object. 

#### getMainCamera
This method is used to get the camera object.
```javascript
scene.getMainCamera();
```

### Mouse
#### getMousePosition
This method is used to get mouse information.
```javascript
resources.getMousePosition();
```

### GameObject
#### getGameObjects
This method is used to get all the gameobject items in the game.
```javascript
scene.getGameObjects();
```

#### addGameObject
This method is used to add gameobjects manually.
```javascript
scene.addGameObject(gameobject);
```
`gameobject`: GameObject instance.

#### findGameObject
This method is used to find an gameobject in the game by name.
```javascript
scene.findGameObject(name);
```
`name`: GameObject name.

### UI
#### getUI
This method is used to get all the user interface items in the game.
```javascript
scene.getUI();
```

#### addUI
This method is used to add user interfaces manually.
```javascript
scene.addUI(uiObject);
```
`uiObject`: UIBox | UILine | UIText

#### findUI
This method is used to find an user interface in the game by name.
```javascript
scene.findUI(name);
```
`name`: UI name.