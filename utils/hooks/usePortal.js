import { useState, useRef, useEffect } from "react";
import cx from "classnames";
import InPortal from "utils/hooks/inPortal";
import { PORTAL_CONTAINER_ID } from "lib/constants";

export default function usePortal({ data: initialData, animate, minWidth = 250 }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialData);
  const [pos, setPos] = useState({});
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const lastNode = useRef(null);

  function onClose() {
    if (animate) {
      window.clearTimeout(timeoutRef.current);
      const target = ref.current;
      if (target) {
        target.classList.remove("appear-down");
        target.classList.add("disappear-up");
      }
      timeoutRef.current = window.setTimeout(() => setOpen(false), 443);
    } else {
      setOpen(false);
    }
  }

  function onOpen(e, d) {
    e.stopPropagation();
    setData(d);
    const { target } = e;
    window.clearTimeout(timeoutRef.current);
    if (!open || lastNode.current !== target) {
      const rect = target.getBoundingClientRect();
      const _pos = { bottom: rect.bottom + window.scrollY, left: rect.left };
      if (_pos.left + minWidth > window.innerWidth) {
        _pos.left = window.innerWidth - minWidth;
      }
      setPos(_pos);
      setOpen(true);
      lastNode.current = target;
    } else {
      onClose();
      lastNode.current = null;
    }
  }

  useEffect(() => {
    function close({ target }) {
      if (ref.current && !ref.current.contains(target)) {
        onClose();
      }
    }
    window.addEventListener("click", close);
    // window.addEventListener("resize", () => onClose());
    return () => {
      window.removeEventListener("click", close);
      // window.removeEventListener("resize", close);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const Portal = ({ className, top, full, children }) => (open ? (
    <InPortal id={PORTAL_CONTAINER_ID}>
      <div
        ref={ref}
        className={cx("abs appear-down", className)}
        style={{ top: top || pos.bottom + 6, left: full ? 0 : pos.left }}
      >
        {children}
      </div>
    </InPortal>
  ) : null);

  return [data, onOpen, onClose, Portal];
}
