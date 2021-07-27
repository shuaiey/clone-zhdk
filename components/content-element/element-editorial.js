import { JaggedListWrapper } from "../zhdk-items";

export default function ElementEditorial({ data }) {
  if (!data || !data.length) return null;
  return (
    <JaggedListWrapper className="wfull hmin-page">
      {data.map((item) => {
        const { id, title, desp, theme, url } = item;
        return (
          <li key={id}>
            <div>
              <h3 className="f-12 f-serif lh5">{title.replace(/<br\/>/g, " ")} </h3>
              <p className="my4">{desp}</p>
              <div className="fw7">● Read</div>
            </div>
          </li>
        );
      })}
    </JaggedListWrapper>
  );
}
