import cx from "classnames";
import {  IconHamburg } from "icons/others";

export default function HamburgButton ({ circle, className, size = "28", ...rest }) {
  return (
    <button
      type="button"
      className={cx(
        "flex-center",
        {
          "radius-circle box16": circle,
        },
        className
      )}
      {...rest}
    >
      <IconHamburg width={size} className='no-event' />
    </button>
  );
};
