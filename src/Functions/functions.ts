export const detectBrowserAndDevice = (): {
    browser: string;
    device: string;
    deviceId: string;
  } => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return {
        browser: "Unknown Browser",
        device: "Unknown Device",
        deviceId: "Unavailable",
      };
    }
  
    const userAgent = navigator.userAgent;
  
    const devicePatterns: Record<string, RegExp> = {
      iPad: /iPad/,
      iPhone: /iPhone/,
      Android: /Android/,
      Windows: /Windows/,
      macOS: /Macintosh/,
      Linux: /Linux/,
      BlackBerry: /BlackBerry/,
      iPod: /iPod/,
      Samsung: /Samsung/,
      Nokia: /Nokia/,
      Sony: /Sony/,
      HTC: /HTC/,
      LG: /LG/,
      Motorola: /Motorola/,
      Nexus: /Nexus/,
      Kindle: /Kindle/,
      FirePhone: /Fire Phone/,
    };
  
    const detectedDevice =
      Object.keys(devicePatterns).find((key) => devicePatterns[key].test(userAgent)) || "Unknown Device";
  
    let browserName = "Unknown Browser";
  
    if (/Firefox\//.test(userAgent)) {
      browserName = "Mozilla Firefox";
    } else if (/Edg\//.test(userAgent)) {
      browserName = "Microsoft Edge";
    } else if (/Chrome\//.test(userAgent)) {
      browserName = "Google Chrome";
    } else if (/Safari\//.test(userAgent) && !/Chrome\//.test(userAgent)) {
      browserName = "Apple Safari";
    } else if (/OPR\//.test(userAgent)) {
      browserName = "Opera";
    } else if (/Trident\//.test(userAgent)) {
      browserName = "Microsoft Internet Explorer";
    } else if (/UCBrowser\//.test(userAgent)) {
      browserName = "UC Browser";
    } else if (/SamsungBrowser\//.test(userAgent)) {
      browserName = "Samsung Internet";
    } else if (/MQQBrowser\//.test(userAgent)) {
      browserName = "QQ Browser";
    } else if (/WeChat\//.test(userAgent)) {
      browserName = "WeChat Browser";
    } else if (/Yandex\//.test(userAgent)) {
      browserName = "Yandex Browser";
    } else if (/AppleWebKit\//.test(userAgent)) {
      browserName = "WebKit-based Browser (unknown)";
    }
  
    const navigatorInfo = window.navigator;
    const screenInfo = window.screen;
  
    let uid = "";
    uid += navigatorInfo.mimeTypes.length;
    uid += navigatorInfo.userAgent.replace(/\D+/g, "");
    uid += navigatorInfo.plugins.length;
    uid += screenInfo.height || "";
    uid += screenInfo.width || "";
    uid += screenInfo.pixelDepth || "";
  
    return {
      browser: browserName,
      device: detectedDevice,
      deviceId: uid,
    };
  };
  

  export const getExpireDate = (days: number = 7): Date => {
    const now = new Date();
    const expiry = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    return expiry;
  };
  