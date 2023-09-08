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
            "loop": true | false,
            "flipHorizontal": true | false,
            "flipVertical": true | false
        }
    ]
}
```

`src`: Image source.

`name`: Image name.

`flipHorizontal(optional)`: Image horizontal flip state. Default value is false.

`flipVertical(optional)`: Image vertical flip state. Default value is false.

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
            "loop": true | false,
            "flipHorizontal": true | false,
            "flipVertical": true | false
        }
    ]
}
```

`name`: Animation name.

`images`: Animation images.

`speed`: Animation frame speed.

`loop(optional)`: Animation loop state. Default value is true.

`flipHorizontal(optional)`: Animation horizontal flip state. Default value is false.

`flipVertical(optional)`: Animation vertical flip state. Default value is false.