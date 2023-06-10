# Camera
## About
It is used to add a camera to the game. There are two types, FollowerCamera for object tracking and Camera for fixed.

## Using Camera
```javascript
resources.setMainCamera(new Camera(x, y));
```
`x`: Vector of x axis
`y`: Vector of y axis

## Camera Types
### Static Camera
It stays stably in the set position.
```javascript
resources.setMainCamera(new Camera(x, y));
```
`x`: Vector of x axis
`y`: Vector of y axis

### Follower Camera
It automatically follows the set object as its position.
```javascript
resources.setMainCamera(new FollowerCamera(GameObject.find(gameObjectName)));
```
`gameObjectName`: Added GameObject name