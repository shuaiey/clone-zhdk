export default function getCitationContent(citation) {
  if (!citation || !citation.content) return null;
  return { html: citation.content, author: citation.author };
}
