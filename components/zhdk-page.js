import HeaderZHDK from "components/zhdk-header";
import ZHDKSidebar from "components/zhdk-sidebar";
import ZHDKFooter from "components/zhdk-footer";
import {
  ZHDK_URL,
  ZHDKH1,
  ZHDKContainer,
  ZHDKHr,
  BackToTop,
  PageWrapper,
  ZHDKH1Desp,
} from "components/zhdk-items";
import ZHDKContentData from "components/content-data";
import { ZhdkSticker } from "components/sticker";
import ContentElement from "components/content-element";

export default function ZhdkPage({ data }) {
  let Content = () => (
    <ZHDKContainer>
      <span>Loading</span>
    </ZHDKContainer>
  );
  if (data) {
    const pageData = new ZHDKContentData(data);
    const { title, description, sticker_enable, sticker_text, sticker_link } =
      pageData.getPageData();
    const sidebarData = pageData.getSidebarData();
    const contentData = pageData.getContentData();

    // eslint-disable-next-line react/display-name
    Content = () => (
      <>
        <ZHDKContainer className="pt3">
          {!!sticker_enable && (
            <ZhdkSticker title={sticker_text} url={`${ZHDK_URL}/${sticker_link}`} />
          )}
          <ZHDKH1>{title}</ZHDKH1>
          {description && <ZHDKH1Desp>{description}</ZHDKH1Desp>}
          <ZHDKHr />
        </ZHDKContainer>

        <div className="relative">
          <ZHDKSidebar data={sidebarData} />
          <ZHDKContainer>
            {contentData.map((props, i) => (
              <ContentElement
                key={i}
                {...props}
                isLast={i === contentData.length - 1}
              />
            ))}
          </ZHDKContainer>
        </div>
      </>
    );
  }

  return (
    <PageWrapper>
      <HeaderZHDK />
      <Content />
      <ZHDKContainer className="mt24">
        <ZHDKHr />
        <ZHDKFooter />
      </ZHDKContainer>

      <BackToTop href="#"> nach oben </BackToTop>
    </PageWrapper>
  );
}
