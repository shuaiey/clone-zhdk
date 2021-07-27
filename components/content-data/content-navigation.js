export default function getNavigationContent(data, locale) {
  if (!data || !data.length) {
    return null;
  }
  const navData = data.map((navItem) => {
    const { nav_title, title, canonical, canonical_1 } = navItem.attributes;
    return {
      name: nav_title || title,
      slug: locale === "de" ? canonical : canonical_1,
    };
  });
  return navData;
}
