import { routeTemplates } from "lib/zhdk-constants";

export function getImgUrl({ type, path, column_width, title }) {
  switch (type) {
    case "image/jpeg":
      return `https://www.zhdk.ch/file/${path}/${getOptimizedImgSize(
        column_width
      )}.jpg`;
    case "image/gif":
      return `https://www.zhdk.ch/file/${path}/${title}`;
    default:
      return "";
  }
}

export function getVideoUlr(htmlString) {
  const match = htmlString.match(/src="(.*?)"/);
  if (match) {
    return match[1];
  }
  return null;
}

export function getAuthors(authors) {
  return authors.map((item) => {
    const { first_name, last_name } = item.attributes;
    return `${first_name} ${last_name}`;
  });
}

export function getCover(image) {
  // const { path, path_source, width, height, alternativeText } =
  //   image.attributes?.assets[0]?.attributes;
  if (!image) return {};
  const { path, path_source, filename, width, height, alternativeText } =
    image.attributes;
  if (!path_source) return null;

  const ext = filename.split(".").slice(-1)[0];
  /** optimized image path */
  return {
    imgUrl: `https://www.zhdk.ch/file/${path}/small.${ext}`,
    width,
    height,
    alt: alternativeText,
  };
  /** original image path */
  // return { imgUrl: path_source, width, height };
}

/**
 *
 * @param {Object} config
 *        { grid: , filterSet, }
 * @returns
 */
export function getGridUrl(config) {
  const { grid, filterSet } = config;
  if (typeof grid === "undefined") {
    return "";
  }
  let url = routeTemplates[`${grid}Grid`];

  if (typeof filterSet === "string") {
    if (filterSet.length > 0) {
      url += `?filterSet=${filterSet}`;
    }
  }
  return url;
}

export function getSearchUrl(config) {
  const { recordType, noTypeSwitch, filters } = config;
  let url = routeTemplates.search;
  const searchQuery = [];
  if (recordType !== "undefined" && recordType && recordType !== "all") {
    searchQuery.push(`recordType=${recordType}`);
  }
  /** TODO: noTypeSwitch */
  /** TODO: filters */

  url = url.replace(
    ":searchQuery",
    ("?" + searchQuery.join("&")).replace(/\?$/g, "")
  );
  return url;
}

export function getItemUrlById(config) {}
export function getOptimizedImgSize(columnWidth) {
  switch (columnWidth) {
    case 50:
      return "medium";
    case 100:
      return "large";
    default:
      return "medium";
  }
}

const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>(.*?(?=<\/a>))<\/a>/g;

export function parseBodyText(html) {
  // const match = html.match(linkRegex)

  let href;
  let linkLabel;
  const content = html.replace(linkRegex, (full, _href, innerHtml) => {
    // Mail content parsing
    // if (_href.indexOf("@") !== -1) {
    // }

    href = _href;
    linkLabel = innerHtml;
    return "";
  });

  return { content, href, linkLabel };
}
