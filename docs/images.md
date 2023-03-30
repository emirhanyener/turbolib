# Images
## About
Images.json is image data in json format. In this file, pictures and animations to be created with these pictures are defined.

## Creating images.json file
### Images
```
{
    "images": [
        {
            "src": "image_source1",
            "name": "image_name1"
        },
        {
            "src": "image_source2",
            "name": "image_name2",
            "flipHorizontal": true | false,
            "flipVertical": true | false
        }
    ]
}
```

`src`: Image source

`name`: Image name

`flipHorizontal(optional)`: Image horizontal flip state

`flipVertical(optional)`: Image vertical flip state

### Animations

```
{
    .
    .
    .
    "animations":[
        {
            "name": "animation_name",
            "images":[
                "image_name1",
                "image_name2"
            ],
            "speed": animation_speed(int),
            "flipHorizontal": true | false,
            "flipVertical": true | false
        }
    ]
}
```

`name`: Animation name

`images`: Animation images

`speed`: Animation frame speed

`flipHorizontal(optional)`: Image horizontal flip state

`flipVertical(optional)`: Image vertical flip state