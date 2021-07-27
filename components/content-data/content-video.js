import { getVideoUlr } from "./content-data.helper";

export default function getVideoContent(asset) {
  const { title, html, provider_name, width, height } = asset.attributes;
  if (!asset) {
    return null;
  }
  return {
    title,
    src: getVideoUlr(html),
    provider: provider_name,
    width,
    height,
  };
}
