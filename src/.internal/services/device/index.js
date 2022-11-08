const BROWSERS = {
  opera: "Opera",
  ie: "Internet Explorer",
  edge: "Microsoft Edge",
  chrome: "Google Chrome",
  safari: "Safari",
  firefox: "Firefox",
};

class Device {
  get width() {
    return window.innerWidth;
  }

  get height() {
    return window.innerHeight;
  }

  get browserName() {
    let browser;
    const nAgt = navigator.userAgent;
    if (nAgt.includes("Opera") || nAgt.includes("OPR")) {
      browser = BROWSERS.opera;
    } else if (nAgt.includes("MSIE") || nAgt.includes("Trident")) {
      browser = BROWSERS.ie;
    } else if (nAgt.includes("Edg")) {
      browser = BROWSERS.edge;
    } else if (nAgt.includes("Chrome")) {
      browser = BROWSERS.chrome;
    } else if (nAgt.includes("Safari")) {
      browser = BROWSERS.safari;
    } else if (nAgt.includes("Firefox")) {
      browser = BROWSERS.firefox;
    }
    return browser;
  }

  get isOpera() {
    return this.browserName === BROWSERS.opera;
  }

  get isIE() {
    return this.browserName === BROWSERS.ie;
  }

  get isEdge() {
    return this.browserName === BROWSERS.edge;
  }

  get isChrome() {
    return this.browserName === BROWSERS.chrome;
  }

  get isSafari() {
    return this.browserName === BROWSERS.safari;
  }

  get isFirefox() {
    return this.browserName === BROWSERS.firefox;
  }
}

const device = new Device();

export { device as Device };
