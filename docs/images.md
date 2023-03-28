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
            "name": "image_name2"
        }
    ]
}
```

`src`: Image source

`name`: Image name

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
            "speed": animation_speed(int)
        }
    ]
}
```

`name`: Animation name

`images`: Animation images

`speed`: Animation frame speed
