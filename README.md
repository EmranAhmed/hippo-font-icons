# ThemeHippo Font Icons


- `sudo npm install -g gulp`
- `npm install`
- `gulp`


# Preparing SVG's

Beware that your SVG icons must have a high enough `height`. `500` is a minimum. 
If you do not want to resize them, you can try to combine the `fontHeight` and the `normalize` option to get them in a correct size.

# Exporting

## Illustrator

Save your file as SVG with the following settings:

- SVG Profiles: SVG 1.1
- Fonts Type: SVG
- Fonts Subsetting: None
- Options Image Location: Embed
- Advanced Options
  - CSS Properties: Presentation Attributes
  - Decimal Places: 1
  - Encoding: UTF-8
  - Output fewer elements: check
  - Leave the rest unchecked.