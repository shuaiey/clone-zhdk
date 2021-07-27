export default function MyImage({ className, lazy, square, ratio, data }) {
  const { imgUrl, alt } = data;
  return (
    <div
      className={["oh", square && "square-box", className].join(" ")}
      style={ratio && { "--aspect-ratio": ratio }}
    >
      <img
        {...(lazy ? { "data-src": imgUrl } : { src: imgUrl })}
        className="img-box oh"
        alt={alt}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
