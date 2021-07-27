import { WaterfallCards } from "../waterfall-cards";
import { LinkMore } from "../zhdk-items";

export default function ContentCards({ data, Content }) {
  const { showMoreLink, data: cardData } = data;
  return (
    <>
      <WaterfallCards data={cardData} Content={Content} />
      {showMoreLink && <LinkMore href={showMoreLink}>Weitere</LinkMore>}
    </>
  );
}
