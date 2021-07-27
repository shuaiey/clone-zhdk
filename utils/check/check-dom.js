export function isDocument(obj) {
  return obj.nodeType === 9; // Node.DOCUMENT_NODE === 9
}

export function isWindow(obj) {
  // `obj === window` or `obj instanceof Window` is not sufficient,
  // as the obj may be the window of an iframe.
  return obj && obj.document && isDocument(obj.document);
}

/**
 * Used to detect browser support for adding an event listener with options
 * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 */
 export function passiveEventsSupported() {
  let supported = false;

  try {
    const options = {
      // eslint-disable-next-line getter-return
      get passive() {
        supported = true;
      },
    };
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    supported = false;
  }

  return supported;
}
