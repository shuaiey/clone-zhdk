import { passiveEventsSupported } from "utils/check/check-dom";
import createScroller from "./scroller";

/**
 * @param element EventTarget
 */
export default function trackScroll(element, options, callback) {
  const isPassiveSupported = passiveEventsSupported();
  let rafId;
  let scrolled = false;
  const scroller = createScroller(element);
  let lastScrollY = scroller.scrollY();
  const details = {};

  function update() {
    const scrollY = Math.round(scroller.scrollY());
    const height = scroller.height();
    const scrollHeight = scroller.scrollHeight();

    // reuse object for less memory churn
    details.scrollY = scrollY;
    details.lastScrollY = lastScrollY;
    details.direction = scrollY > lastScrollY ? "down" : "up";
    details.distance = Math.abs(scrollY - lastScrollY);
    details.isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;
    details.top = scrollY <= options.offset[details.direction];
    details.bottom = scrollY + height >= scrollHeight;
    details.toleranceExceeded = details.distance > options.tolerance[details.direction];

    callback(details);

    lastScrollY = scrollY;
    scrolled = false;
  }

  function handleScroll() {
    if (!scrolled) {
      scrolled = true;
      rafId = requestAnimationFrame(update);
    }
  }

  const eventOptions = isPassiveSupported ? { passive: true, capture: false } : false;

  element.addEventListener("scroll", handleScroll, eventOptions);
  update();

  return {
    destroy() {
      cancelAnimationFrame(rafId);
      element.removeEventListener("scroll", handleScroll, eventOptions);
    },
  };
}
