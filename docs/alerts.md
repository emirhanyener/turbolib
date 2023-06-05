# Alerts
## About
It is used to send instant notifications to users.

## Using Alert
### Update Alerts Delay Time
```javascript
resources.alertManager.delayTime = timeMillisecond;
```
`TimeMillisecond`: Alerts delay time(milliseconds)

### Add
This method creates a alert.
```javascript
resources.addAlert(text, color);
```
`text`: Alert content

`color`: Alert text color
