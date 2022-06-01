export default function getBrouser(window) {
  

  // Firefox 1.0+
  let isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  let isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' && window['safari'].pushNotification)
    );

  // Internet Explorer 6-11
  let isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  let isChrome = !!window.chrome

  let isYandex = window.navigator.userAgent.search(/YaBrowser/) > 0;

  // Edge (based on chromium) detection
  let isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

  // Blink engine detection
  let isBlink = isChrome && !!window.CSS;
  const brousers = {isSafari,isIE,isChrome,isBlink,isEdge,isEdgeChromium,isFirefox,isYandex};

  return brousers;
}
