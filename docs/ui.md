# User Interface(UI)
## About
It is used to create a graphical user interface. It contains box, line and text elements as user interface elements.

## Using UI
### Adding UI
This method adds a UI element to the interface.
```javascript
resources.addUI(new UIType());
```
`UIType`: The type of user interface to be added.

### Getting UI
This method is used to getting an added UI element.
```javascript
resources.findUI(UIName);
```
`UIName`: The name of the UI element that has been added.

### Position
This method allows to change the color of the UI element. Default value is black.
```javascript
resources.findUI(UIName).position.update(newPosition);
```
`UIName`: The name of the UI element that has been added.

### Color
This method allows to change the color of the UI element. Default value is black.
```javascript
resources.findUI(UIName).color = "#000000";
```
`UIName`: The name of the UI element that has been added.

### Game World
Allows the UI element to be calculated based on the camera position (true).
```javascript
resources.findUI(UIName).gameWorld = true / false;
```
`UIName`: The name of the UI element that has been added.

### Active
Changes the active state of the UI element. If it is not active it is not visible.
```javascript
resources.findUI(UIName).active = true / false;
```
`UIName`: The name of the UI element that has been added.

## UI Types
### UIBox
- UIBox(name, position, size);
```javascript
resources.addUI(new UIBox(UIName, new Vector(x, y), new Vector(width, height)));
resources.findUI(UIName);
```
`UIName`: The name of the UI element that has been added.

### UILine
- UILine(name, position);
```javascript
resources.addUI(new UILine(UIName, new Vector(x, y)));
resources.findUI(UIName).updateFromTo(fromX, fromY, toX, toY);
```
`UIName`: The name of the UI element that has been added.

### UIText
- IUText(name, text, position, size);
```javascript
resources.addUI(new UIText(UIName, text, new Vector(x, y), textSize));
resources.findUI(UIName).text = "";
```
`UIName`: The name of the UI element that has been added.