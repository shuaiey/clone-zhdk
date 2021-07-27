import { parseBodyText } from "./content-data.helper";

export default function getStandardContent(html) {
  if (!html) return null;
  // 1. process link
  const { content, href, linkLabel } = parseBodyText(html);
  // 1. stripe tags
  const stripedContent = content.replace(/<.*?\/?>/g, "").replace(/→|(&nbsp;)/g, "");
  return { content: stripedContent, href, linkLabel };
}
