import { isWindow } from "utils/check/check-dom";

function windowScroller(win) {
  const doc = win.document;
  const { body } = doc;
  const html = doc.documentElement;

  return {
    /**
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {Number} the scroll height of the document in pixels
     */
    scrollHeight() {
      return Math.max(
        body.scrollHeight,
        html.scrollHeight,
        body.offsetHeight,
        html.offsetHeight,
        body.clientHeight,
        html.clientHeight
      );
    },

    /**
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {Number} the height of the viewport in pixels
     */
    height() {
      return win.innerHeight || html.clientHeight || body.clientHeight;
    },

    /**
     * Gets the Y scroll position
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    scrollY() {
      if (win.pageYOffset !== undefined) {
        return win.pageYOffset;
      }

      return (html || body.parentNode || body).scrollTop;
    },
  };
}

function elementScroller(element) {
  return {
    /**
     * @return {Number} the scroll height of the element in pixels
     */
    scrollHeight() {
      return Math.max(
        element.scrollHeight,
        element.offsetHeight,
        element.clientHeight
      );
    },

    /**
     * @return {Number} the height of the element in pixels
     */
    height() {
      return Math.max(element.offsetHeight, element.clientHeight);
    },

    /**
     * Gets the Y scroll position
     * @return {Number} pixels the element has scrolled along the Y-axis
     */
    scrollY() {
      return element.scrollTop;
    },
  };
}

export default function createScroller(element) {
  return isWindow(element) ? windowScroller(element) : elementScroller(element);
}
