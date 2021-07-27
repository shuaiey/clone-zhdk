export default function getEditorialContent(data) {
  if (!data || !data.length) return null;
  return data.map((item) => {
    const { title, theme, teaser_introduction, canonical } = item.attributes;
    return { id: item.id, title, theme, desp: teaser_introduction, url: canonical };
  });
}
