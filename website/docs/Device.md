---
sidebar_position: 2
title: Device
---


A `Device` is a service that provides us with device information.

## Import

```
import {Device} from 'frontik/device'
```

## Basic Usage

```js
import {Device} from 'frontik/device'

console.log(Device.width); // 1920
console.log(Device.height); // 1080
```

## API
- [width](#devicewidth)
- [height](#deviceheight)
- [browserName](#devicebrowsername)
- [isChrome](#deviceischrome)
- [isSafari](#deviceissafari)
- [isFirefox](#deviceisfirefox)
- [isIE](#deviceisie)
- [isEdge](#deviceisedge)
- [isOpera](#deviceisopera)

<br />

### `Device.width`

```js
import {Device} from 'frontik/device'

console.log(Device.width); // 1920
```

Returns `<number>`

Returns the interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.

<br />

### `Device.height`

```js
import {Device} from 'frontik/device'

console.log(Device.height); // 1080
```

Returns `<number>`

Returns the interior height of the window in pixels. This includes the height of the horizontal scroll bar, if one is present.

<br />

### `Device.browserName`

```js
import {Device} from 'frontik/device'

console.log(Device.browserName); // Chrome

```
List of browsers
- Google Chrome
- Safari
- Firefox
- Internet Explorer
- Microsoft Edge
- Opera

Returns `<string>`

Returns the browser name.

<br />

### `Device.isChrome`

```js
import {Device} from 'frontik/device'

console.log(Device.isChrome); // true
```

Returns `<boolean>`

Returns true if the browser is Google Chrome, false otherwise.

<br />

### `Device.isSafari`

```js
import {Device} from 'frontik/device'

console.log(Device.isSafari); // false
```

Returns `<boolean>`

Returns true if the browser is Safari, false otherwise.

<br />

### `Device.isFirefox`

```js
import {Device} from 'frontik/device'

console.log(Device.isFirefox); // false
```

Returns `<boolean>`

Returns true if the browser is Firefox, false otherwise.

<br />

### `Device.isIE`

```js
import {Device} from 'frontik/device'

console.log(Device.isIE); // false
```

Returns `<boolean>`

Returns true if the browser is Internet Explorer, false otherwise.

<br />

### `Device.isEdge`

```js
import {Device} from 'frontik/device'

console.log(Device.isEdge); // false
```

Returns `<boolean>`

Returns true if the browser is Microsoft Edge, false otherwise.

<br />

### `Device.isOpera`

```js
import {Device} from 'frontik/device'

console.log(Device.isOpera); // false
```

Returns `<boolean>`

Returns true if the browser is Opera, false otherwise.

<br />

## React

See: [useDevice hook](/docs/React/Hooks/useDevice)
