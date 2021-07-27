export default function getNumbersContent(data) {
  if (!data || !data.length) return null;
  return data.map((item) => {
    const { text } = item.attributes;
    const { width, height, title } = item.relationships.assets.data[0].attributes;
    return { id: item.id, number: title, desp: text, width, height };
  });
}
