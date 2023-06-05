# GameObject
## About
Game objects are objects that are invisible or visible, used by users in the game. Using these objects, interactive objects can be created for the user. These objects are the most used classes when creating games. Physics and events (except global) are handled through this class.

## Using GameObjects
### Create
This method creates the GameObject and adds it to the Resources.

```javascript
GameObject.create(name, x, y, width, height);
```
`name`: GameObject name

`x`: Position of x axis

`y`: Position of y axis

`width`: GameObject width

`height`: GameObject height

### Find
This method finds the GameObject using the name and returns the finded GameObject.

```javascript
GameObject.find(name);
```
`name`: GameObject name

### Set Color
This method sets color to the GameObject.

```javascript
GameObject.find(name).setColor(color);
```
`name`: GameObject name

`color`: Color (default #000000)

### Set Image
This method sets the image or animation to the GameObject.

```javascript
GameObject.find(gameObjectName).setImage(imageName);
```
`gameObjectName`: GameObject name

`imageName`: Solid or animated image name from images.json

- Note: Color is not used if the image is set to GameObject.

### Add Physics
This method adds physics to the GameObject.

```javascript
GameObject.find(name).addPhysics();
```
`name`: GameObject name

### Get Physics
This method returns physics from the linked GameObject.

```javascript
GameObject.find(name).getPhysics();
```
`name`: GameObject name

### Destroy
This method removes the selected GameObject from the Resources.

```javascript
GameObject.find(name).destroy();
```
`name`: GameObject name

### Check Trigger
This method returns all objects as an array if there is an object within the specified parameters.
![CheckTriggerImage](/images/CheckTriggerImage.png)
```javascript
GameObject.find(name).checkTrigger(offsetX, offsetY, x, y);
```
`name`: GameObject name

`offsetX`: Position x axis offset

`offsetY`: Position y axis offset

`x`: X axis length

`y`: Y axis length
