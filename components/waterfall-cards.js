import { useEffect, useRef } from "react";
import waterfall from "lib/waterfall";
import CardTwo from "components/card/card-two";
import { DefaultCardContent } from "./card-content";

export const WaterfallCards = ({ data, Content = DefaultCardContent }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      waterfall(ref.current);
    }
    return () => {};
  }, []);

  return (
    <div ref={ref} className="box-lg flex flex-wrap">
      {data.map((item, i) => {
        const { cover, ...rest } = item;
        const { imgUrl, width, height } = cover;
        return (
          <CardTwo
            key={i}
            className="pr4 mb4 wp50 ib pointer"
            radius="none"
            data={{ imgUrl }}
            ratio={width / height}
            // lazy
          >
            <Content {...rest} />
          </CardTwo>
        );
      })}
    </div>
  );
};
