import { useEffect, useRef } from "react";
import styled from "styled-components";
import { transitionRGB } from "utils/color";

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  .__target {
    background: linear-gradient(
      var(--background-color-top, #fff),
      var(--background-color-bottom, #fff)
    );
    transition: background-color 1s;
  }
`;

function buildThresholdList(numSteps = 1) {
  const thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

const DEFAULT_SELECTOR_CONFIG = {
  selector: ".color-me", // This is the CSS selector who what to watch as the page is scrolled.
  cssProp: "backgroundColor", // Which CSS property gets changed. Use JS style not CSS style. E.g. use "backgroundColor" not "background-color", etc.
  enableWillChange: true, // Advanced use only. Enabling may improve performance. See https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
  willChangeProp: "background", // Advanced use only. Because 'will-change: background-color' is invalid.
};

const DEFAULT_OBSERVER_CONFIG = {
  root: null,
  rootMargin: "0px",
  threshold: buildThresholdList(20), // 1.0 = 100% in view,
};

export default function EffectBackgroundChangeWithIntersection({
  enable,
  selectorConfig = {},
  observerConfig = {},
  children,
}) {
  const targetRef = useRef(null);
  const observer = useRef(null);

  function cleanObserver() {
    if (observer.current) {
      observer.current.disconnect();
    }
  }

  useEffect(() => {
    if (!enable) {
      return;
    }
    const { current } = targetRef;
    let watchedElems;
    cleanObserver();

    const config = { ...DEFAULT_SELECTOR_CONFIG, ...selectorConfig };
    let topNode;
    let nextNode;

    function handleIntersect(entries) {
      if (!topNode || !nextNode) {
        const activeNodes = entries.filter((x) => x.isIntersecting);
        if (!activeNodes || !activeNodes.length) return;

        // eslint-disable-next-line prefer-destructuring
        topNode = activeNodes[0];

        if (activeNodes.length > 1) {
          nextNode = activeNodes[activeNodes.length - 1];
        } else {
          nextNode = topNode;
        }
      }

      entries.forEach((entry) => {
        const { target, isIntersecting, boundingClientRect } = entry;
        /** update */
        if (isIntersecting && topNode.target === target) {
          topNode = entry;
        }
        if (isIntersecting && nextNode?.target === target) {
          nextNode = entry;
        }

        /** scroll down */
        if (!isIntersecting && topNode.target === target) {
          topNode = nextNode;
        }
        if (
          isIntersecting &&
          topNode === nextNode &&
          boundingClientRect.top > 0 &&
          nextNode.target !== target
        ) {
          nextNode = entry;
        }
        /** scroll up */
        if (!isIntersecting && nextNode?.target === target) {
          nextNode = topNode;
        }
        if (
          isIntersecting &&
          topNode === nextNode &&
          boundingClientRect.top < 0 &&
          nextNode.target !== target
        ) {
          topNode = entry;
        }

        // if (entry.target.dataset.name === "1") {
        //   console.log(isIntersecting, entry.boundingClientRect);
        // }
      });
      // console.log(topNode.target.dataset.name, nextNode?.target.dataset.name);

      let { colorTop, colorBottom } = topNode.target.dataset;
      if (nextNode) {
        const { colorTop: nextColorTop, colorBottom: nextColorBottom } =
          nextNode.target.dataset;
        colorTop = transitionRGB(colorTop, nextColorTop, nextNode.intersectionRatio);
        colorBottom = transitionRGB(
          colorBottom,
          nextColorBottom,
          nextNode.intersectionRatio
        );
      }

      current.style.setProperty("--background-color-top", colorTop);
      current.style.setProperty("--background-color-bottom", colorBottom);
    }

    function createObserver() {
      const options = { ...DEFAULT_OBSERVER_CONFIG, ...observerConfig };
      observer.current = new IntersectionObserver(handleIntersect, options);

      watchedElems.forEach((elem) => {
        observer.current.observe(elem);
      });
    }

    function init() {
      if (config.enableWillChange) current.style.willChange = config.willChangeProp;
      watchedElems = document.querySelectorAll(config.selector);

      createObserver();
    }

    init();

    return () => {
      cleanObserver();
    };
  }, [enable]);

  return (
    <>
      <FixedWrapper>
        <div ref={targetRef} className="__target abs box-full" />
      </FixedWrapper>
      {children}
    </>
  );
}
