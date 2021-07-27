import styled from "styled-components";
import { IconArrow } from "icons/google";
import MyLink from "components/basic/my-link";

export const ZHDK_URL = "";
export const ZHDK_COLORS = {
  blue: "#64afcb",
  purple: "#8890ca",
  green: "#91cba2",
  rose: "#f472b6",
  orange: "#ff784b",
  "jahresbericht-lavender": "#9c88f2",
  "jahresbericht-green": "#29cc99",
  "jahresbericht-yellow": "#ffdb5c",
  "jahresbericht-orange": "#ff7917",
};

export const PageWrapper = styled.div`
  position: relative;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  section {
    scroll-margin-top: 120px;
  }
  & .__musik:hover {
    color: ${ZHDK_COLORS.blue};
  }
  & .__tanz:hover {
    color: ${ZHDK_COLORS.blue};
  }

  & .__blue:hover {
    color: ${ZHDK_COLORS.blue};
  }
  & .__purple:hover {
    color: ${ZHDK_COLORS.purple};
  }
  & .__green:hover {
    color: ${ZHDK_COLORS.green};
  }
  & .__rose:hover {
    color: ${ZHDK_COLORS.rose};
  }
  & .__orange:hover {
    color: ${ZHDK_COLORS.orange};
  }
  & .__infobox {
    background-color: ${ZHDK_COLORS.blue};
    color: #fff;
  }
  & .__tanz.__infobox {
    background-color: ${ZHDK_COLORS.blue};
  }
  & .__transdisziplinaritaet.__infobox {
    background-color: ${ZHDK_COLORS.purple};
  }
`;

export const ZHDKH1 = styled.h1`
  position: relative;
  left: -6px;

  font-weight: 700;
  font-size: 3.75rem;
  line-height: 1;
  hyphens: auto;
  word-break: break-word;
  margin-bottom: 2rem;

  @media (min-width: 1381px) {
    font-size: 85px;
  }
`;

export const ZHDKH1Desp = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  hyphens: auto;
  word-break: break-word;
`;

export const ZHDKH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75em;
`;

export const ZHDKReportH2Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 500;
    padding: .75rem 0.75rem;
    border-bottom: 1px solid #000;
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    border-right: 1px solid #000;

    h2 {
      padding: 0 1.5rem;
      transform: rotate(-180deg);
      display: inline-block;
      writing-mode: tb-rl;
    border-bottom: none;
    }
  }
`;

export const ZHDKParagraph = styled.p`
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const ZHDKContainer = styled.div`
  position: relative;
  width: 75%;
  margin-left: 18.75%;
  padding-right: 15px;
`;

export const ZHDKLink = styled(MyLink)`
  font-weight: 300;
  font-size: 1.25rem;
  border-bottom: 1px solid currentColor;
  transition: background-color 0.2s;
  cursor: pointer;
  margin-bottom: 1rem;
  display: inline-block;

  &:before {
    content: "→ ";
    margin-right: 0.25rem;
  }
  &:hover {
    border-bottom-style: dashed;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ZHDKLinkMore = styled(MyLink)`
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  .__icon {
    transition: transform 0.15s;
  }
  &:hover {
    color: #000;
  }
  &:hover .__icon {
    transform: translateX(6px);
  }
`;

export const ZHDKHr = styled.hr`
  background-color: #f1f1f1;
  height: 2px;
  width: 100%;
  border: 0;
  margin: 1.5rem 0;
`;

export const LinkMore = ({ href, children }) => {
  let moreUrl = href;
  if (!moreUrl.startsWith("http")) {
    moreUrl = `${ZHDK_URL}${href}`;
  }
  return (
    <ZHDKLinkMore href={moreUrl} className="f-gray-400 flex-cy">
      <span className="mr1">{children}</span>
      <IconArrow className="__icon" width="20px" strokeWidth=".5px" />
    </ZHDKLinkMore>
  );
};

export const CardContent = ({ date, title, type, subtitle }) => {
  return (
    <div className="p5 bg-gray-200 flex-col">
      <span className="f-1 fw7">{date}</span>
      {type && <span className="fsi">{type}</span>}
      <h3 className="f-6 fw7 lh5 my2">{title}</h3>
      {subtitle && <p className="fw5 f-4">{subtitle}</p>}
    </div>
  );
};

export const BackToTop = styled.a`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: rotateZ(-90deg) translateX(100%);
  transform-origin: 100% 100%;
  z-index: 10;
  padding: 10px;
  padding-right: 30px;
  will-change: transform;
  font-weight: 700;
  color: #aaa;
  line-height: 1;
  transition: transform 150ms ease-out;
  &:after {
    content: "→";
  }
`;

export const JaggedListWrapper = styled.ul`
  list-style: none;
  display: flex;
  overflow: auto;
  margin-bottom: 50vh;
  > li {
    width: 400px;
    flex-shrink: 0;
    padding: 0 1rem;
    border-right: 1px solid black;
    display: flex;
  }
  > li:nth-child(3n + 2) {
    align-items: center;
  }
  > li:nth-child(3n + 3) {
    align-items: flex-end;
  }
`;
