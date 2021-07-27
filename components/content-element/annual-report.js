/* eslint-disable react/display-name */
import { FlexContainer } from "components/container";
import { slugify } from "utils/format";
import {
  HighlightArticleContent,
  NewsContent,
  ProjectCardContent,
} from "../card-content";
import { VideoWithCover } from "./element-video";
import InfoBox from "../info-box";
import { ZHDKReportH2Wrapper } from "../zhdk-items";
import ContentCards from "./element-cards";
import ContentGallery from "./element-gallery";
import ContentStandard from "./element-standard";
import ElementCitation from "./element-citation";
import ReportElementCards from "./report-element-cards";
import ElementEditorial from "./element-editorial";
import ElementNumberList from "./element-number";
import ElementColumnList from "./element-column-list";
import ElementInfoTable from "./element-info-table";

export default function ReportContentElement({ type, data, header, sectionProps }) {
  let Content = () => null;

  switch (type) {
    case "citation":
      Content = () => <ElementCitation {...data} />;
      break;
    case "standard_content":
      Content = () => <ContentStandard {...data} />;
      // Content = () => <ZHDKParagraph>{data.text}</ZHDKParagraph>;
      break;
    case "video":
      Content = () => <VideoWithCover {...data} />;
      break;
    case "teaser_highlight_article":
      Content = () => (
        <ReportElementCards data={data} Content={HighlightArticleContent} />
      );
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
      Content = () => (
        <div className="wfull">
          <ContentGallery data={data} />
          <div className="h400" />
        </div>
      );
      break;
    case "teaser_editorial":
      Content = () => <ElementEditorial data={data} />;
      break;
    case "content_numbers":
      Content = () => <ElementNumberList data={data} />;
      break;
    case "organigram":
      Content = () => (
        <div style={{ marginBottom: "50vh" }}>
          <img
            src="https://www.zhdk.ch/static/dist/img/jahresbericht/organigramm.jpg"
            alt="organigram"
            referrerPolicy="no-referrer"
          />
        </div>
      );
      break;
    case "content_graduates":
      Content = () => <ElementColumnList data={data} />;
      break;
    case "content_impressums":
      Content = () => <ElementInfoTable data={data} />;
      break;
    default:
      break;
  }

  return (
    <FlexContainer
      id={header && slugify(header)}
      className="flex __section"
      {...sectionProps}
    >
      {header && (
        <ZHDKReportH2Wrapper>
          <h2>{header}</h2>
        </ZHDKReportH2Wrapper>
      )}
      <Content />
    </FlexContainer>
  );
}
