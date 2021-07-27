import { FlexContainer } from "components/container";
import { slugify } from "utils/format";
import { NewsContent, ProjectCardContent } from "../card-content";
import ZHDKContentNav from "./element-content-nav";
import Video from "./element-video";
import InfoBox from "../info-box";
import { ZHDKH2, ZHDKHr } from "../zhdk-items";
import ContentCards from "./element-cards";
import ContentGallery from "./element-gallery";
import ContentStandard from "./element-standard";

export default function ContentElement({ type, data, header, hr, isLast }) {
  let Content = () => null;

  switch (type) {
    case "content_navigation":
      Content = () => <ZHDKContentNav data={data} />;
      break;
    case "standard_content":
      Content = () => <ContentStandard {...data} />;
      break;
    case "video":
      Content = () => <Video {...data} />;
      break;
    case "infobox_teaser_cms":
      Content = () => (
        <FlexContainer>
          {data.map((item) => (
            <InfoBox key={item.title} {...item} />
          ))}
        </FlexContainer>
      );
      break;
    case "content_teaser_study_projects":
      Content = () => <ContentCards data={data} Content={ProjectCardContent} />;
      break;
    case "content_teaser_news":
      Content = () => <ContentCards data={data} Content={NewsContent} />;
      break;
    case "content_teaser_events":
      Content = () => <ContentCards data={data} Content={NewsContent} />;
      break;
    case "gallery":
      Content = () => <ContentGallery data={data} />;
      break;
    default:
      break;
  }

  return (
    <section id={header ? slugify(header) : null}>
      {header && <ZHDKH2 className="lh5">{header}</ZHDKH2>}
      <Content />
      {hr && !isLast && <ZHDKHr />}
    </section>
  );
}
