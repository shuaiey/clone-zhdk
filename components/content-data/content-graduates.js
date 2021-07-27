export default function getGraduatesContent(data) {
  if (!data || !data.length) return null;
  const list = data.map((item) => {
    const { header, title, text } = item.attributes;
    return { id: item.id, header, title, list: text };
  });
  const result = [];
  let temp = {};
  list.forEach((item, i) => {
    const { header, ...rest } = item;
    if (item.header) {
      if (i !== 0) {
        result.push(temp);
      }
      temp = {
        header,
        children: [],
      };
    }
    temp.children.push(rest);
    if (i === list.length - 1) {
      result.push(temp);
    }
  });
  return result;
}
