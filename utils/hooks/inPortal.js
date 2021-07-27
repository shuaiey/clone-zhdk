import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function InPortal({ id, children }) {
  const [hasMounted, setHasMounted] = useState(false);
  // let ref = document.querySelector(`#${id}`);

  // if (!ref) {
  //   ref = document.createElement("div");
  //   ref.setAttribute("id", id);
  // }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return ReactDOM.createPortal(children, document.querySelector(`#${id}`));
}
