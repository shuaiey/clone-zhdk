import { GridContainer } from "components/container";
import CardTwo from "components/card/card-two";
import { LinkMore, ZHDK_COLORS } from "../zhdk-items";

export default function ReportElementCards({ data, Content }) {
  const { showMoreLink, data: cardData } = data;
  return (
    <div style={{ marginBottom: "50vh" }}>
      <GridContainer lg="4" xl="6" className="ai-start gap0">
        {cardData.map((item, i) => {
          const { cover, theme, ...rest } = item;
          const { imgUrl, width, height } = cover;
          return (
            <CardTwo
              key={i}
              className="pt6 mx3 mb3 ib pointer"
              radius="none"
              data={{ imgUrl }}
              ratio={width / height}
              // lazy
              style={{ backgroundColor: ZHDK_COLORS[theme] }}
            >
              <Content {...rest} />
            </CardTwo>
          );
        })}
      </GridContainer>
      {showMoreLink && <LinkMore href={showMoreLink}>Weitere</LinkMore>}
    </div>
  );
}
