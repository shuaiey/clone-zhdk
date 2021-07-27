import cx from "classnames";

export default function CardTwo({
  className,
  height,
  ratio,
  square = false,
  hero = false,
  radius = "lg",
  data,
  children,
  lazy = false,
  ...rest
}) {
  return (
    <div
      className={cx(
        "flex shadow-light hover-parent",
        { [`radius-${radius}`]: radius, "flex-col": !hero },
        className
      )}
      {...rest}
    >
      <div
        className={cx("oh hover-child:overlay", {
          "square-box": square,
          flex2: hero,
        })}
        style={ratio ? { "--aspect-ratio": ratio } : null}
      >
        <img
          {...(lazy ? { "data-src": data.imgUrl } : { src: data.imgUrl })}
          className={cx("img-box hover-child:zoom oh", hero ? "h400" : "h300")}
          alt=""
          style={{ "--active-scale": "1.1", height }}
          referrerPolicy="no-referrer"
        />
      </div>

      {children}
    </div>
  );
}
