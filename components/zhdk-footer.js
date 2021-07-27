import { FlexContainer, GridContainer } from "components/container";
import MyLink from "components/basic/my-link";
import {
  FacebookCircle,
  InstagramSolid,
  TwitterMinimal,
  YoutubeSolid,
} from "icons/share";
import Link from "next/link";
import { IconExternalLink } from "icons/others";

const ZHDK_FOOTER_DATA = [
  {
    name: "col1",
    children: [
      { name: "Toni-Areal", slug: "/" },
      { name: "Musikklub Mehrspur", slug: "/" },
      { name: "Theater der Künste", slug: "/" },
      { name: "Kino Toni", slug: "/" },
      { name: "Museum für Gestaltung", slug: "/" },
    ],
  },
  {
    name: "col2",
    children: [
      { name: "Medienstelle ", slug: "/" },
      { name: "Medien- und Informationszentrum", slug: "/" },
      { name: "Personen", slug: "/" },
      { name: "Jobs", slug: "/" },
      { name: "Veranstaltungsnewsletter", slug: "/" },
    ],
  },
];

export default function ZHDKFooter() {
  return (
    <div className="f-2">
      <FlexContainer className="py2">
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

        <div className='box4'></div>
        <GridContainer base="1" lg="2" className="flex2 gap4 fwb f-gray-400">
          {ZHDK_FOOTER_DATA.map((item) => (
            <div className="" key={item.name}>
              <GridContainer base="2" sm="1" lg="1" className="gap0">
                {item.children.map((x) => (
                  <Link href={x.slug} key={x.name}>
                    <a href={x.slug} className="mb2 hover:color">{x.name}</a>
                  </Link>
                ))}
              </GridContainer>
            </div>
          ))}
        </GridContainer>
      </FlexContainer>
      <div className="py2 fw7 f-gray-400 f-2 flex-between ">
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
      <div className="p1 fw5 box-black active-yellow">
        Created by{" "}
        <MyLink href="https://shuai.ch" className='hover:color'>
          Shuai <IconExternalLink width="12px" />
        </MyLink>
        .
      </div>
    </div>
  );
}

/**
 *   Hinweise
facebook twitter instagram youtube flickr Zett
 */
