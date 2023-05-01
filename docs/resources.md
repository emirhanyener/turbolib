# Resources
## About
The resources variable is an object required for managing resources. With resources you can have control of gameobject objects and UI objects. The most used features are adjusting the camera and getting mouse position information.

## Import
```javascript
import { resources } from "turbolib/src/index.js";
```

## Methods
### setMainCamera
This method is used to add or update cameras in the game.
```javascript
resources.setMainCamera(cameraObject);
```
`cameraObject`: Camera or FollowerCamera object. 

### getMainCamera
This method is used to get the camera object.
```javascript
resources.getMainCamera();
```

### getMousePosition
This method is used to get mouse information.
```javascript
resources.getMousePosition();
```

### getGameObjects
This method is used to get all the gameobject items in the game.
```javascript
resources.getGameObjects();
```

### addGameObject
This method is used to add gameobjects manually.
```javascript
resources.addGameObject(gameobject);
```
`gameobject`: GameObject instance.

### findGameObject
This method is used to find an gameobject in the game by name.
```javascript
resources.findGameObject(name);
```
`name`: GameObject name.

### getUI
This method is used to get all the user interface items in the game.
```javascript
resources.getUI();
```

### addUI
This method is used to add user interfaces manually.
```javascript
resources.addUI(uiObject);
```
`uiObject`: UIBox | UILine | UIText

### findUI
This method is used to find an user interface in the game by name.
```javascript
resources.findUI(name);
```
`name`: UI name.