import { FlexContainer, GridContainer } from "components/container";
import MyLink from "components/basic/my-link";
import {
  FacebookCircle,
  InstagramSolid,
  TwitterMinimal,
  YoutubeSolid,
} from "icons/share";
import Link from "next/link";

const ZHDK_FOOTER_DATA = [
  {
    name: "col1",
    children: [
      { name: "Toni-Areal", slug: "/triangle-menu" },
      { name: "Musikklub Mehrspur", slug: "/triangle-menu" },
      { name: "Theater der Künste", slug: "/triangle-menu" },
      { name: "Kino Toni", slug: "/triangle-menu" },
      { name: "Museum für Gestaltung", slug: "/triangle-menu" },
    ],
  },
  {
    name: "col2",
    children: [
      { name: "Medienstelle ", slug: "/triangle-menu" },
      { name: "Medien- und Informationszentrum", slug: "/triangle-menu" },
      { name: "Personen", slug: "/triangle-menu" },
      { name: "Jobs", slug: "/triangle-menu" },
      { name: "Veranstaltungsnewsletter", slug: "/triangle-menu" },
    ],
  },
];

export default function ZHDKFooter() {
  return (
    <div className="f-2">
      <FlexContainer className="py4">
        <div className="flex1 flex-col fw7 lh2">
          <span>Zürcher Hochschule der Künste</span>
          <span>Pfingstweidstrasse 96</span>
          <span>Postfach</span>
          <span>CH-8031 Zürich</span>
          <span>
            Tel.
            <a href="tel:+41434464646" target="_blank" rel="noreferer">
              +41 43 446 46 46
            </a>
          </span>
          <span>
            Email: <a href="mailto:info.admin@ zhdk.ch">info.admin@ zhdk.ch</a>
          </span>
        </div>
        <GridContainer base="1" lg="2" className="flex2 gap0 fwb f-gray-400">
          {ZHDK_FOOTER_DATA.map((item) => (
            <div className="px4" key={item.name}>
              {/* <div className="fwb mb2">{item.name}</div> */}
              <GridContainer base="2" sm="1" lg="1" className="gap0">
                {item.children.map((x) => (
                  <Link href={x.slug} key={x.name}>
                    <a className="mb2 hover:color">{x.name}</a>
                  </Link>
                ))}
              </GridContainer>
            </div>
          ))}
        </GridContainer>
      </FlexContainer>
      <div className="pb8 fw7 f-gray-400 f-2 flex-between ">
        <div className="">
          <MyLink href="/" className="mb2 hover:color mr8">
            Impressum
          </MyLink>
          <MyLink href="/" className="mb2 hover:color">
            Rechtliche
          </MyLink>
        </div>
        <div className="flex-cy">
          <FacebookCircle width="18px" className="mr2 hover:color pointer" />
          <TwitterMinimal width="18px" className="mr2 hover:color pointer" />
          <InstagramSolid width="18px" className="mr2 hover:color pointer" />
          <YoutubeSolid width="18px" className="hover:color pointer" />
        </div>
      </div>
    </div>
  );
}

/**
 *   Hinweise
facebook twitter instagram youtube flickr Zett
 */
