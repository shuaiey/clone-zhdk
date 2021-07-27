import { getImgUrl } from "./content-data.helper";

export default function getGalleryContent(assets) {
  if (!assets || !assets.length) return null;
  return assets.map((item) => {
    const { path, mime_type, title, width, height, alternativeText, column_width } =
      item.attributes;
    return {
      imgUrl: getImgUrl({ path, type: mime_type, column_width, title }),
      alt: alternativeText,
      width,
      height,
    };
  });
}

