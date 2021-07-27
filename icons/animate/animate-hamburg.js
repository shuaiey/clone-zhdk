import styled from "styled-components";

const Hamburg = styled.div`
  padding: 10px;
  display: block;
  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  & .__hamburg {
    transition: transform 0.1s ease-out;
    pointer-events: none;
    width: 24px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12px;
    margin-top: -7px;
  }
  & .__line {
    width: 100%;
    position: absolute;
    height: 2px;
    background-color: currentColor;
    display: block;
    margin-top: -1px;
  }
  & .line-top {
    top: 0;
  }
  & .line-mid {
    top: 50%;
  }
  & .line-bottom {
    top: 100%;
  }
  & .line-top,
  & .line-bottom {
    transition: transform 0.1s ease-out;
    transition-delay: 150ms;
  }
  & .line-mid {
    transition: transform 0.1s ease-out;
    transition-delay: 0s;
  }
  &:hover .line-top {
    transition-delay: 0s;
    transform: translateY(7px);
  }
  &:hover .line-mid {
    transform: rotateZ(-90deg);
    transition-delay: 150ms;
  }
  &:hover .line-bottom {
    transition-delay: 0s;
    transform: translateY(-7px);
  }
`;

export default function AnimateHamburg(props) {
  return (
    <Hamburg {...props}>
      <div className="__hamburg">
        <span className="__line line-top" />
        <span className="__line line-mid" />
        <span className="__line line-bottom" />
      </div>
    </Hamburg>
  );
}
