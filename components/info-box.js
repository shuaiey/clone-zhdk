import MyLink from "components/basic/my-link";
import styled from "styled-components";
import { ZHDK_URL } from "./zhdk-items";

const InfoBoxWrapper = styled.div`
  height: 160px;
  width: 100%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-weight: 700;
  position:relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.4s 0.1s cubic-bezier(0.2, 1, 0.22, 1);
    background-color: inherit;
  }
  &:hover :before {
    transform: scale(1.03);
  }
  & a:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.6);
    transition: transform 150ms, opacity 150ms cubic-bezier(0.2, 1, 0.22, 1),
      visibility 150ms;
  }
  &:hover a:before {
    visibility: visible;
    opacity: 1;
    transform: scale(1.03);
  }
  &:hover a{
    color: #fff;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 33%;
  }
`;

export default function InfoBox({ title, url, theme }) {
  let href = `${ZHDK_URL}/${url}`;
  if (url.startsWith("http")) {
    href = url;
  }
  return (
    <InfoBoxWrapper className={`__infobox __${theme}`}>
      <MyLink href={href} className="relative z1 flex ai-end wfull hmin-full">
        <div className="p4">{title}</div>
      </MyLink>
    </InfoBoxWrapper>
  );
}
