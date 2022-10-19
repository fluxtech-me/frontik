---
sidebar_position: 2
title: Device
---


A `Device` is a service that provides us with device information.

## Basic Usage

```js
import {Device} from 'frontik/device'

console.log(Device.width); // 1920
console.log(Device.height); // 1080
```

## API
- [width](#devicewidth)
- [height](#deviceheight)

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

## React

See: [useDevice hook](/docs/React/Hooks/useDevice)
