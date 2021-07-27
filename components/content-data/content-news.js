import { formatDate } from "utils/zhdk";
import { getCover, getGridUrl } from "./content-data.helper";

export default function getNewsContent(newsData) {
  if (!newsData || !newsData.length) return null;

  const data = newsData.map((_item) => {
    const { header, url_segment, url_segment_1, date, media } = _item.data;

    return {
      title: header,
      date: formatDate(date, { unix: true }),
      url: getGridUrl({
        grid: "news",
      }),
      // .replace(/:newsId/, url_segment),
      cover: getCover(media[0]),
    };
  });
  return data;
}
