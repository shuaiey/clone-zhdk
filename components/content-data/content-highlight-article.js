import { getCover } from "./content-data.helper";

export default function getHighlightArticleContent(articleData) {
  if (!articleData || !articleData.length) return null;
  const data = articleData.map((item) => {
    const { title, theme, canonical, teaser_introduction } = item.attributes;
    return {
      title,
      description: teaser_introduction,
      theme,
      url: canonical,
      cover: getCover(item.relationships?.teaser_image.data[0]),
    };
  });
  return data;
}
