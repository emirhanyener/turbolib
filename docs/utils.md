# Utils
## Vector
### About 
It is the base class used with the GameObject class and used for all vector operations. With this class, operations such as position, size and velocity can be defined.

### Methods
#### Update
This method updates the old values and assigns the new values.

```javascript
update(x, y);
```
`x`: Vector of x axis
`y`: Vector of y axis

#### Add
This method updates the old values, sums the old values with the new values and assigns them as the new value.

```javascript
add(x, y);
```
`x`: Vector of x axis
`y`: Vector of y axis

#### Scale
This method multiplies the old values with the new values and assigns this as the new value. Used for GameObject size.

```javascript
scale(newScale);
```
`newScale`: Scale value
