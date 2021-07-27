import { isBrowser } from "utils/check/check-env";
import trackScroll from "utils/listener/track-scroll";

function isSupported() {
  return !!(
    isBrowser() &&
    function () {}.bind &&
    "classList" in document.documentElement &&
    Object.assign &&
    Object.keys &&
    requestAnimationFrame
  );
}

function normalizeUpDown(t) {
  return t === Object(t) ? t : { down: t, up: t };
}

/**
 * UI enhancement for fixed headers.
 * Hides header when scrolling down
 * Shows header when scrolling up
 * @constructor
 * @param {DOMElement} elem the header element
 * @param {Object} options options for the widget
 */
function Headroom(elem, options = {}) {
  Object.assign(this, Headroom.options, options);
  this.classes = { ...Headroom.options.classes, ...options.classes };
  this.elem = elem;
  this.tolerance = normalizeUpDown(this.tolerance);
  this.offset = normalizeUpDown(this.offset);
  this.initialised = false;
  this.frozen = false;
}
Headroom.prototype = {
  constructor: Headroom,

  /**
   * Start listening to scrolling
   * @public
   */
  init() {
    if (Headroom.cutsTheMustard && !this.initialised) {
      this.addClass("initial");
      this.initialised = true;

      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(
        (self) => {
          self.scrollTracker = trackScroll(
            self.scroller,
            { offset: self.offset, tolerance: self.tolerance },
            self.update.bind(self)
          );
        },
        100,
        this
      );
    }

    return this;
  },

  /**
   * Destroy the widget, clearing up after itself
   * @public
   */
  destroy() {
    this.initialised = false;
    Object.keys(this.classes).forEach(this.removeClass, this);
    this.scrollTracker.destroy();
  },

  /**
   * Unpin the element
   * @public
   */
  unpin() {
    if (this.hasClass("pinned") || !this.hasClass("unpinned")) {
      this.addClass("unpinned");
      this.removeClass("pinned");

      if (this.onUnpin) {
        this.onUnpin.call(this);
      }
    }
  },

  /**
   * Pin the element
   * @public
   */
  pin() {
    if (this.hasClass("unpinned")) {
      this.addClass("pinned");
      this.removeClass("unpinned");

      if (this.onPin) {
        this.onPin.call(this);
      }
    }
  },

  /**
   * Freezes the current state of the widget
   * @public
   */
  freeze() {
    this.frozen = true;
    this.addClass("frozen");
  },

  /**
   * Re-enables the default behaviour of the widget
   * @public
   */
  unfreeze() {
    this.frozen = false;
    this.removeClass("frozen");
  },

  top() {
    if (!this.hasClass("top")) {
      this.addClass("top");
      this.removeClass("notTop");

      if (this.onTop) {
        this.onTop.call(this);
      }
    }
  },

  notTop() {
    if (!this.hasClass("notTop")) {
      this.addClass("notTop");
      this.removeClass("top");

      if (this.onNotTop) {
        this.onNotTop.call(this);
      }
    }
  },

  bottom() {
    if (!this.hasClass("bottom")) {
      this.addClass("bottom");
      this.removeClass("notBottom");

      if (this.onBottom) {
        this.onBottom.call(this);
      }
    }
  },

  notBottom() {
    if (!this.hasClass("notBottom")) {
      this.addClass("notBottom");
      this.removeClass("bottom");

      if (this.onNotBottom) {
        this.onNotBottom.call(this);
      }
    }
  },

  shouldUnpin(details) {
    const scrollingDown = details.direction === "down";

    return scrollingDown && !details.top && details.toleranceExceeded;
  },

  shouldPin(details) {
    const scrollingUp = details.direction === "up";

    return (scrollingUp && details.toleranceExceeded) || details.top;
  },

  addClass(className) {
    this.elem.classList.add(...this.classes[className].split(" "));
  },

  removeClass(className) {
    this.elem.classList.remove(...this.classes[className].split(" "));
  },

  hasClass(className) {
    return this.classes[className].split(" ").every(function (cls) {
      return this.classList.contains(cls);
    }, this.elem);
  },

  update(details) {
    if (details.isOutOfBounds) {
      // Ignore bouncy scrolling in OSX
      return;
    }

    if (this.frozen === true) {
      return;
    }

    if (details.top) {
      this.top();
    } else {
      this.notTop();
    }

    if (details.bottom) {
      this.bottom();
    } else {
      this.notBottom();
    }

    if (this.shouldUnpin(details)) {
      this.unpin();
    } else if (this.shouldPin(details)) {
      this.pin();
    }
  },
};

/**
 * Default options
 * @type {Object}
 */
Headroom.options = {
  tolerance: {
    up: 0,
    down: 0,
  },
  offset: 0,
  scroller: isBrowser() ? window : null,
  classes: {
    frozen: "headroom--frozen",
    pinned: "headroom--pinned",
    unpinned: "headroom--unpinned",
    top: "headroom--top",
    notTop: "headroom--not-top",
    bottom: "headroom--bottom",
    notBottom: "headroom--not-bottom",
    initial: "headroom",
  },
};

Headroom.cutsTheMustard = isSupported();

export default Headroom;
