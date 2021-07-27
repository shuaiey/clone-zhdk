
const default_format_options = {
  unix: false,
};
export function formatDate(dateStr, options = default_format_options) {
  const { unix } = options;
  let dateNumber = Number(dateStr);
  if (unix) {
    dateNumber *= 1000;
  }
  const date = new Date(dateNumber);
  return date.toLocaleDateString().replace(/\//g, ".");
}

export function formatTimeDuration(start, end) {
  const startHour = `${start / 3600}:00`;
  if (Number(end)) {
    const endHour = `${end / 3600}:00`;
    return `${startHour} - ${endHour}`;
  }
  return startHour;
}

const LOCALE_MAPPING = {
  de: 0,
  en: 1,
};

export function parsePageData(data, options = { locale: "de" }) {
  const { locale } = options;
  const currentEntries = data.contents.filter((item) => {
    if (!item) return false;
    return item.attributes.sys_language_uid == LOCALE_MAPPING[locale];
  });
  return currentEntries;
  // const sidebar_data = currentEntries
  //   .map(({ attributes }) => ({
  //     name: attributes.header,
  //     id: slugify(attributes.header),
  //   }))
  //   .filter((x) => x.name);

  // let content_nav_data = currentEntries.filter(
  //   (item) => item.attributes.CType === "content_navigation"
  // );
  // if (content_nav_data.length) {
  // }

  // return { sidebar_data, content_nav_data };
}