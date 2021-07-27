import { FlexContainer } from "components/container";

export default function ElementInfoTable({ data }) {
  if (!data || !data.length) return null;
  return (
    <div className="mx-auto box-xl px6 wfull hmin-page">
      {data.map((item,i) => (
        <FlexContainer key={i} flex="md" className="py3 border-bottom border-gray-400">
          <strong className="fw5 f-5 mb4 pr10 flex1">{item.title}</strong>
          <div className="flex1" dangerouslySetInnerHTML={{ __html: item.desp }} />
        </FlexContainer>
      ))}
    </div>
  );
}
