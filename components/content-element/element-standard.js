import { ZHDKLink, ZHDKParagraph } from "../zhdk-items";

export default function ContentStandard({ content, href, linkLabel }) {
  return (
    <>
      <ZHDKParagraph>{content}</ZHDKParagraph>
      {href && <ZHDKLink href={href}>{linkLabel}</ZHDKLink>}
    </>
  );
}
