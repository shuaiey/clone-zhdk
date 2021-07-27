import MyLink from "components/basic/my-link";
import cx from "classnames";
import { ZHDK_URL } from "../zhdk-items";

const CONTENT_NAV_LIST = [
  { name: "Studium", slug: "/studium", theme: "blue" },
  { name: "Weiterbildung", slug: "", theme: "purple" },
  { name: "Forschung", slug: "", theme: "rose" },
  { name: "Hochschule", slug: "", theme: "orange" },
  { name: "Internationales", slug: "", theme: "green" },
];

export default function ZHDKContentNav({ data = CONTENT_NAV_LIST }) {
  return (
    <nav>
      <ul className="ul f-gray-400 f-9">
        {data.map((item) => (
          <li key={item.name}>
            <MyLink
              href={`${ZHDK_URL}/${item.slug}`}
              className={cx("fw7", `__${item.theme}`)}
            >
              {item.name}
            </MyLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
