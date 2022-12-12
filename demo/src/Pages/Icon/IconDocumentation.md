# Icon Component

- [Content Navigation](#content-navigation)
    - [Frontik Icon Font](#frontik-icon-font)
    - [Requirements](#requirements)
    - [Usage](#usage)
    - [Props](#props)
    - [Examples](#examples)
    - [Using Inline SVGs](#using-inline-svgs)
    
## Frontik Icon Font

To use Icon Component we should have our own Icon Font. 
The Icon Font benefits are:
- Flexible
- Scalable
- Vector
- Fast
- Accessible
- Local Usage

The Icomoon benefits are:
- Build Custom Fonts
- Pixel Perfect Results
- Free Icons, Free App
- Awesome Iconography Tool
- Import Your Own Vectors
- Works Offline
- Multiple Ligatures Per Glyph

## Requirements

[https://icomoon.io/app](https://icomoon.io/app)

## Usage

Head over to [https://icomoon.io/app](https://icomoon.io/app) using a modern web browser to start using the IcoMoon app. 
You can download these icons, do some basic editing, import your own icons, make icon fonts (a font with icons as its glyphs) or generate icons in SVG, Polymer, PDF, XAML, PNG and CSS sprites.

This app is also available in the [Chrome Web Store](https://chrome.google.com/webstore/detail/kppingdhhalimbaehfmhldppemnmlcjd?utm_source=chrome-ntp-icon) (runs offline).


## Props
Props of the native component are also available.

|      Name           |       Type        |      Default     |         Description       
| :-----------------: | :---------------: | :--------------: | :---------------------------: |
|     `prefix`        |      String       |    'frontik'     |    The default icon definer prefix must be 'frontik'. That also can be changed, according to your Icommon pack settings.
|     `name`          |      String       |  'frontik frontik-name'  |    The base class applied to the icon. That must begin with the 'frontik-' prefix and after that should be the prefered icon name from your Icomoon pack font classNames.
|     `className`     |      String       |                  |    Overrides or extends the styles applied to the Icon
|     `color`         |  String, primary, secondary, success, error, info, warning   |   'inherit'       |    The color of the component. Accepts all the colors defined by the System
|     `size`          | String, xs, sm, md, lg, xlg |  'inherit'   |   The fontSize applied to the icon. Can be configure to inherit font size.
|     `animation`     |      String       |    'inherit'     |   Accepts the animation className for animating the Icon
|     `disabled`      |      Boolean      |      false       |   Makes the Icon state disabled/enabled
|     `role`          |      String       |                  |   Necessary for Screen Readers to pronounce the focus action name that si important for Accessibility. Should be set to button
|     `tabindex`      |      Number       |                  |   `tabindex` attribute allows to make the Icon interactive for the user using Tabs navigation and for the Screen Readers that is necessary for the Accessibility. Should be set to 0 for navigation in an right order.

## Examples

```jsx
// Icon usage
<Icon
    size="lg"
    color="secondary"
    animation="shake"
    name="heart"
    title="Info icon"
/>

// Icon with action should have at least tabIndex
// for Screen Readers for Accessibility
<Icon
    onClick={(e) => clickHandler(e)}
    tabIndex="0"
    role="button"
    size="md"
    name="earth"
/>
```

### Using Inline SVGs

When you download your icon pack from the SVG tab in the IcoMoon app, it comes with a demo.html file that 
contains SVG icon definitions on top of the document, below <body> and inside [SVG's <code>defs</code> element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs).
These icons can be referenced and used as inline SVGs like so:

```html
<svg class="icon-home">
  <use xlink:href="#icon-home"></use>
</svg>
```
