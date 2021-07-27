import { getAuthors, getCover } from "./content-data.helper";

export default function getStudyProjectContent(projectData) {
  if (!projectData || !projectData.length) return null;
  const data = projectData.map((_item) => {
    const {
      title,
      subtitle,
      project_title,
      description,
      authors,
      teaserImage,
      mediaEntries,
    } = _item;
    return {
      title: project_title || title,
      subtitle,
      description,
      authors: getAuthors(authors),
      cover: getCover(
        teaserImage?.attributes.assets[0] ||
          mediaEntries.filter((x) => x.attributes.renderingType === "image")[0].attributes.assets[0]
      ),
    };
  });
  return data;
}
