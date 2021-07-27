import { JaggedListWrapper } from "../zhdk-items";

export default function ElementNumberList({ data }) {
  if (!data || !data.length) return null;
  return (
    <JaggedListWrapper className="wfull hmin-page">
      {data.map((item) => {
        const { id, number, desp, width, height } = item;
        return (
          <li key={id}>
            <div className="flex-col">
              <svg
                viewBox={`0 0 ${Math.floor((width / height) * 14)} 15`}
                style={{ fontSize: "12px" }}
              >
                <text x="0" y="12" className="f-serif">
                  {number}
                </text>
              </svg>
              <p className="my4">{desp}</p>
            </div>
          </li>
        );
      })}
    </JaggedListWrapper>
  );
}
