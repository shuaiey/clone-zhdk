import { formatDate, formatTimeDuration } from "utils/zhdk";
import { getCover, getGridUrl } from "./content-data.helper";

export default function getEventContent(newsData) {
  if (!newsData || !newsData.length) return null;

  const data = newsData.map((_item) => {
    const {
      id,
      title,
      subtitle,
      time_start,
      time_end,
      date_start_miliseconds,
      type,
      teaser,
    } = _item.data;

    return {
      title,
      subtitle,
      type,
      date: `${formatDate(date_start_miliseconds)}, ${formatTimeDuration(
        time_start,
        time_end
      )}`,
      url: getGridUrl({
        grid: "events",
      }),
      // .replace(/:newsId/, url_segment),
      cover: getCover(teaser[0]),
    };
  });
  return data;
}
