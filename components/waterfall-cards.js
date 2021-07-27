/* eslint-disable no-underscore-dangle */
import {  useRef } from "react";
import CardTwo from "components/card/card-two";
import { DefaultCardContent } from "./card-content";
import { GridContainer } from "./container";

export const WaterfallCards = ({ data, Content = DefaultCardContent }) => {
  const ref = useRef(null);
  const { length } = data;
  const _data = [data.slice(0, length / 2), data.slice(length / 2)];
  
  return (
    <GridContainer ref={ref} lg='2' className="box-lg">
      {_data.map((list, i) => (
        <div key={i} className="grid1 as-start">
          {list.slice(0, length / 2).map((item, i) => {
            const { cover, ...rest } = item;
            const { imgUrl, width, height } = cover;
            return (
              <CardTwo
                key={i}
                className="pr4 mb4 ib pointer"
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
      ))}
    </GridContainer>
  );
};
