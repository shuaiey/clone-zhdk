export default function getImpressumsContent(data) {
  if (!data || !data.length) return null;
  return data.map((item) => {
    const { title, text } = item.attributes;
    return { id: item.id, title, desp: text };
  });
}
