import styled from "styled-components";

const ColumnWrapper = styled.ul`
  list-style: none;
  columns: 180px auto;
  column-gap: 20px;
  column-rule: 1px solid currentColor;
  overflow: auto;
  margin-bottom: 50vh;
`;

export default function ElementColumnList({ data }) {
  if (!data || !data.length) return null;
  return (
    <ColumnWrapper className="wfull hmin-page px2">
      {data.map((item) => {
        const { header, children } = item;
        return (
          <li key={header} className="pl2">
            <h3 className="f-5 lh5 f-serif mb2 f-blue-400">{header}</h3>
            <ul className="ul">
              {children.map((child) => {
                const { id, title, list } = child;
                return (
                  <li key={id} className="mb4">
                    <h4 className="fwb f-2 lh5 mb1">{title}</h4>
                    <ul className="ul f-1">
                      {list.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ColumnWrapper>
  );
}
