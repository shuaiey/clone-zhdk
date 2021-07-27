import { FlexContainer } from "components/container";
import MyImage from "components/basic/my-image";

export default function ContentGallery({ data }) {
  return (
    <FlexContainer className="wfull">
      {data.map((item, i) => {
        const { imgUrl, alt, width, height } = item;
        return (
          <MyImage
            key={i}
            className="flex1 mr4 mb4"
            data={{ imgUrl, alt }}
            ratio={width / height}
          />
        );
      })}
    </FlexContainer>
  );
}
