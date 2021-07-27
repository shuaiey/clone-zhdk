import EffectBackgroundChangeWithIntersection from "components/effect/background-gradient/with-intersection";
import { ZHDKStaticHeader } from "components/zhdk-header";
import ZHDKContentData from "components/content-data";
import ContentElement from "components/content-element/annual-report";
import { PageWrapper, ZHDKContainer } from "components/zhdk-items";

const SECTION_COLOR_LIST = [
  {
    "data-color-top": "rgb(255, 121, 23)",
    "data-color-bottom": "rgb(255, 121, 23)",
    "data-name": 1,
  },
  {
    "data-color-top": "rgb(236, 213, 234)",
    "data-color-bottom": "rgb(255, 121, 23)",
    "data-name": 2,
  },
  {
    "data-color-top": "rgb(255, 121, 23)",
    "data-color-bottom": "rgb(236, 213, 234)",
    "data-name": 3,
  },
  {
    "data-color-top": "rgb(236, 213, 234)",
    "data-color-bottom": "rgb(255, 121, 23)",
    "data-name": 4,
  },
  {
    "data-color-top": "rgb(156, 136, 242)",
    "data-color-bottom": "rgb(156, 136, 242)",
    "data-name": 5,
  },
  {
    "data-color-top": "rgb(255, 121, 23)",
    "data-color-bottom": "rgb(236, 213, 234)",
    "data-name": 6,
  },
  {
    "data-color-top": "rgb(236, 213, 234)",
    "data-color-bottom": "rgb(236, 213, 234)",
    "data-name": 7,
  },
  {
    "data-color-top": "rgb(236, 213, 234)",
    "data-color-bottom": "rgb(255, 121, 23)",
    "data-name": 8,
  },
  {
    "data-color-top": "rgb(156, 136, 242)",
    "data-color-bottom": "rgb(156, 136, 242)",
    "data-name": 9,
  },
  {
    "data-color-top": "rgb(236, 213, 238)",
    "data-color-bottom": "rgb(246, 167, 128)",
    "data-name": 10,
  },
];

export default function ZhdkAnnualReportLayout({ data }) {
  let Content = () => <span>Loading</span>;

  if (data) {
    const pageData = new ZHDKContentData(data);
    const { title, description, nav_title } = pageData.getPageData();
    const contentData = pageData.getContentData();

    Content = () => (
      <>
        <FullPageHero title={title} />
        {contentData.map((props, i) => (
          <ContentElement key={i} {...props} sectionProps={SECTION_COLOR_LIST[i]} />
        ))}
      </>
    );
  }

  return (
    <EffectBackgroundChangeWithIntersection
      enable={data}
      selectorConfig={{ selector: ".__section" }}
    >
      <ZHDKStaticHeader scroll={false} withBackground={false} absolute />
      <Content />
    </EffectBackgroundChangeWithIntersection>
  );
}

const FullPageHero = ({ title }) => {
  return (
    <section
      className="relative hpage f-serif __section"
      data-color-top="rgb(236, 213, 234)"
      data-color-bottom="rgb(255, 121, 23)"
      data-name="0"
    >
      <PageWrapper>
        <ZHDKContainer className="pt32">
          <div className="pt8 f-7 flex-col lh1">
            <span>Jahresbericht</span>
            <span>2020</span>
          </div>
        </ZHDKContainer>
      </PageWrapper>

      <div className="abs-bottom wfull flex">
        <svg viewBox="0 0 54 15" style={{ fontSize: "12px" }}>
          <text x="0" y="15">
            {title}
          </text>
        </svg>
      </div>
    </section>
  );
};
