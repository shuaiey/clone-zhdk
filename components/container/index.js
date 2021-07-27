import cx from "classnames";
import styled from "styled-components";

export const GridContainer = ({
  as = "div",
  className,
  children,
  base = 1,
  sm = "2",
  md,
  lg = "4",
  xl,
  ...rest
}) => {
  const Tag = as;

  return (
    <Tag
      className={cx(
        `grid${base} msm:grid${sm} mlg:grid${lg}`,
        {
          [`mmd:grid${md}`]: md,
          [`mxl:grid${xl}`]: xl,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const FlexContainer = ({
  as = "div",
  className,
  children,
  initial = "flex-col",
  flex = "sm",
  ...rest
}) => {
  const Tag = as;
  const breakStyle = initial === "flex" ? "flex-col" : "flex";

  return (
    <Tag className={cx(`${initial} m${flex}:${breakStyle}`, className)} {...rest}>
      {children}
    </Tag>
  );
};

export const FixedHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  flex-wrap: nowrap;
  > div {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    height: ${(props) => props.height || "800px"};
    flex-wrap: wrap;
    > div {
      width: inherit;
    }
  }
`;
