import styled from "styled-components";

const Cross = styled.button`
  width: 35px;
  height: 35px;
  position: relative;
  background: none;
  cursor: pointer;
  &:focus{
    outline: none;
  }
  &:before,
  &:after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -12px;
    position: absolute;
    background-color: currentColor;
  }
  &:before {
    transform: rotateZ(-45deg);
    transition: transform 450ms ease-out;
  }

  &:after {
    transform: rotateZ(45deg);
    transition: transform 300ms ease-in;
  }

  &:hover:before {
    transform: rotateZ(-135deg);
  }

  &:hover:after {
    transform: rotateZ(-225deg);
  }
`;

export default function AnimateCross(props) {
  return (
    <Cross {...props}>
      <span className="sr-only">Navigation schliessen</span>
    </Cross>
  );
}
