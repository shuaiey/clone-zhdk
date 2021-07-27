import MyLink from "components/basic/my-link";
import cx from "classnames";
import styled from "styled-components";
import useActiveHeading from "utils/hooks/useActiveHeading";

const SidebarWrapper = styled.div`
  padding-right: 15px;
  width: 18.75%;
  position: absolute;
  height: 100%;
  & a {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: transform 150ms ease-out, visibility 150ms, opacity 150ms,
      font-size 0.1s;
  }
  & a:hover {
    color: #000;
  }
  & .is-active {
    font-size: 1.2em;
  }
`;

const SIDEBAR_LIST = [
  { name: "Die ZHdK", id: "zhdk-category" },
  { name: "Jahresbericht 2020", id: "zhdk-2020" },
  { name: "News", id: "zhdk-news" },
  { name: "Veranstaltungen", id: "zhdk-anstalt" },
];

export default function ZHDKSidebar({ data = SIDEBAR_LIST }) {
  const activeSectionId = useActiveHeading(data);

  return (
    <SidebarWrapper>
      {/* <div className="sticky h300 box-black flex-center" style={{ top: "140px" }}>
        <h1>Sidebar</h1>
      </div> */}
      <nav className="sticky flex-col mr8 f-gray-400 f-2" style={{ top: "140px" }}>
        {data.map((item) => (
          <MyLink
            key={item.name}
            href={`#${item.id}`}
            className={cx("f-right mb3 fwb", {
              "f-black fwh is-active":
                activeSectionId === item.id ||
                (!activeSectionId && item.id === "zhdk-category"),
            })}
          >
            {item.name}
          </MyLink>
        ))}
      </nav>
    </SidebarWrapper>
  );
}
