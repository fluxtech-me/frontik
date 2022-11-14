class Device {
  get width() {
    return window.innerWidth;
  }

  get height() {
    return window.innerHeight;
  }
}

const device = new Device();

export { device as Device };
