import MyLink from "components/basic/my-link";
import styled from "styled-components";

const Sticker = styled.div`
  z-index: 1;
  position: absolute;
  top: 0.75rem;
  right: 0;
  display: block;
  width: 100%;
  border-radius: 50%;
  height:8rem;
  width: 8rem;
  pointer-event: none;

  &.__large{
    height: 9rem;
    width: 9rem;
    font-size: .875rem;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
  }
  &:before {
    z-index: -2;
    background-color: #d47e51;
    background-color: ${({ colorBefore }) => colorBefore};
    transition: transform 0.5s cubic-bezier(0.2, 1, 0.22, 1);
  }
  &:after {
    z-index: -1;
    background-color: #d88b62;
    background-color: ${({ colorAfter }) => colorAfter};
    transform: scale(0.6);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.2, 1, 0.22, 1),
      opacity 0.5s cubic-bezier(0.2, 1, 0.22, 1);
  }
  &:hover {
    transform: scale(1.025);
  }
  &:hover:before {
    transform: scale(1.075);
  }
  &:hover:after {
    transform: scale(1.075);
    opacity: 1;
  }
  & .__content {
    width: 70%;
    height: 70%;
    overflow: hidden;
    position: relative;
    top: 15%;
    left: 15%;
    transform: rotate(10deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    hyphens: auto;
    word-break: break-word;
    text-align: center;
    font-weight: 700;
  }
`;

export const ZhdkSticker = ({ title, url, colorBefore, colorAfter }) => {
  return (
    <MyLink href={url}>
      <Sticker
        colorBefore={colorBefore}
        colorAfter={colorAfter}
        className={title.length > 35 ? "__large" : ""}
      >
        <div className="__content">{title}</div>
      </Sticker>
    </MyLink>
  );
};
