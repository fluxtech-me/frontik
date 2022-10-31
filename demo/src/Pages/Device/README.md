# Device

A `Device` is a service that provides us with device information.

## Basic Usage

```js
import { device } from "./Device";

console.log(device.width); // 1920
console.log(device.height); // 1080
```

## API

- width
- height

<br />

### `device.width`

```js
import { device } from "./Device";

console.log(device.width); // 1920
```

Returns `<number>`

Returns the interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.

<br />

### `device.height`

```js
import { device } from "./Device";

console.log(device.height); // 1080
```

Returns `<number>`

Returns the interior height of the window in pixels. This includes the height of the horizontal scroll bar, if one is present.

<br />

# useDevice hook

`useDevice` is the `React` hook that returns us the latest information from the `Device` service

## Basic Usage

```js
import { useDevice } from "./useDevice";

const UseDeviceHookInfo = () => {
  const deviceInfo = useDevice();
  // always updates deviceInfo when resizing

  return (
    <div>
      <p>width - {deviceInfo.width}</p>
      <p>height - {deviceInfo.height}</p>
    </div>
  );
};
```
