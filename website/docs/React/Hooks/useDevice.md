---
sidebar_position: 1
---

`useDevice` is the React hook that returns us the latest information from the [Device](/docs/Device) service.

## Import

```
import {useDevice} from 'frontik/react/useDevice'
```

## Basic Usage

```js
import {useDevice} from 'frontik/react/useDevice'

const App = () => {
    const Device = useDevice()

    // always updates Device width/height when resizing
    return <div>
        <p>width - {Device.width}</p>
        <p>height - {Device.height}</p>
    </div>
}

```