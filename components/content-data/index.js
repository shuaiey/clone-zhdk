import { slugify } from "utils/format";
import { parsePageData } from "utils/zhdk";
import { getGridUrl, getSearchUrl } from "./content-data.helper";
import getGalleryContent from "./content-gallery";
import getNavigationContent from "./content-navigation";
import getNewsContent from "./content-news";
import getStandardContent from "./content-standard";
import getStudyProjectContent from "./content-study-project";
import getVideoContent from "./content-video";
import getEventContent from "./content-event";
import getCitationContent from "./content-citation";
import getHighlightArticleContent from "./content-highlight-article";
import getEditorialContent from "./content-editorial";
import getNumbersContent from "./content-numbers";
import getGraduatesContent from "./content-graduates";
import getImpressumsContent from "./content-impressums";

export default class ZHDKContentData {
  constructor(data, options = { locale: "de" }) {
    const { locale } = options;
    this.originalData = data;
    this.data = this.getLocaleData("de");
    this.locale = locale;
  }

  init(locale) {
    this.data = this.getLocaleData(locale);
  }

  getLocaleData(locale) {
    return parsePageData(this.originalData, { locale });
  }

  getPageData() {
    const { title, nav_title, description, sticker_enable, sticker_text } =
      this.originalData;
    let { sticker_link } = this.originalData;
    if (sticker_link) {
      sticker_link = sticker_link[0]?.attributes.canonical;
    }
    return {
      title,
      nav_title,
      description,
      sticker_enable,
      sticker_text,
      sticker_link,
    };
  }

  getSidebarData() {
    return this.data
      .map(({ attributes }) => ({
        name: attributes.header,
        id: slugify(attributes.header),
      }))
      .filter((x) => x.name);
  }

  getContentData() {
    return this.data.map((item) => {
      const { attributes, relationships } = item;
      const { header, section_text, CType, _hasHr } = attributes;
      let data;
      switch (CType) {
        case "content_navigation": {
          data = getNavigationContent(
            relationships.content_navigation_pages.data,
            this.locale
          );
          break;
        }
        case "standard_content": {
          const { bodytext } = attributes;
          data = getStandardContent(bodytext);
          // data = { html: bodytext, text: attributes.bodytext_stripped };
          break;
        }
        case "video": {
          const asset = relationships?.assets.data[0];
          data = getVideoContent(asset);
          break;
        }
        case "infobox_teaser_cms": {
          const boxesData = relationships.infobox_teaser_cms_pages.data;
          if (!boxesData) break;
          data = boxesData.map((_item) => {
            const { title, canonical, theme } = _item.attributes;
            return { title, url: canonical, theme };
          });
          break;
        }
        case "content_teaser_study_projects": {
          const { uid } = attributes;
          data = {
            showMoreLink: getGridUrl({
              grid: "studyProject",
              filterSet: uid,
            }),
            data: getStudyProjectContent(relationships.studyProject.data),
          };
          break;
        }
        case "content_teaser_news": {
          data = {
            showMoreLink: getSearchUrl({
              search: true,
              recordType: "news",
            }),
            data: getNewsContent(relationships.news.data),
          };
          break;
        }
        case "content_teaser_events": {
          const { uid } = attributes;
          data = {
            showMoreLink: getGridUrl({
              grid: "event",
              filterSet: uid,
            }),
            data: getEventContent(relationships.events.data),
          };
          break;
        }
        case "gallery": {
          data = getGalleryContent(relationships.assets.data);
          break;
        }
        case "citation": {
          data = getCitationContent(attributes.citation);
          break;
        }
        case "teaser_highlight_article": {
          data = {
            data: getHighlightArticleContent(
              relationships.teaser_highlight_article_pages.data
            ),
          };
          break;
        }
        case "teaser_editorial": {
          data = getEditorialContent(relationships?.teaser_editorial_pages.data);
          break;
        }
        case "content_numbers": {
          data = getNumbersContent(relationships?.numbers.data);
          break;
        }
        case "content_graduates": {
          data = getGraduatesContent(relationships?.graduates.data);
          break;
        }
        case "content_impressums": {
          data = getImpressumsContent(relationships?.impressums.data);
          break;
        }
        default:
          break;
      }
      return { header: header || section_text, type: CType, data, hr: _hasHr };
    });
    // let content_nav_data = this.data.filter(
    //   (item) => item.attributes.CType === "content_navigation"
    // );
  }
}
