import { memo, useEffect, useRef, useState } from "react";
import cx from "classnames";
import styled from "styled-components";
import Headroom from "lib/headroom";
import HeaderWrapper from "components/nav/header-wrapper";
import MyLink from "components/basic/my-link";
import AnimateHamburg from "icons/animate/animate-hamburg";

import InPortal from "utils/hooks/inPortal";
import { PORTAL_CONTAINER_ID } from "lib/constants";
import AnimateCross from "icons/animate/animate-cross";

import { ZHDKContainer, PageWrapper, ZHDK_URL } from "./zhdk-items";
import { IconSearch } from "./zhdk-icons";

const MAIN_NAV_LIST = [
  {
    name: "Studienangebote",
    slug: "/studium",
    theme: "blue",
    children: [
      { name: "Bachelor", slug: "/bachelor" },
      { name: "Master", slug: "" },
      { name: "PhD Centre", slug: "/doktorat" },
      { name: "Weiterbildung", slug: "" },
      { name: "Vorbildung", slug: "" },
      { name: "Tanz Akademie Zürich", slug: "" },
    ],
  },
  {
    name: "Schauplätze",
    slug: "",
    theme: "purple",
    children: [
      { name: "Toni-Areal", slug: "/bachelor" },
      { name: "Medien- und Informationszentrum", slug: "/bachelor" },
      { name: "Museum für Gestaltung", slug: "/bachelor" },
      { name: "Musikklub Mehrspur", slug: "/bachelor" },
      { name: "Theater der Künste", slug: "/bachelor" },
      { name: "Kino Toni", slug: "/bachelor" },
    ],
  },
  {
    name: "Hochschule",
    slug: "",
    theme: "rose",
    children: [
      { name: "Hochschule", slug: "/bachelor" },
      { name: "Toni-Areal", slug: "/bachelor" },
      { name: "Lehre", slug: "/bachelor" },
      { name: "Forschung", slug: "/bachelor" },
      { name: "Internationales", slug: "/bachelor" },
      { name: "#digital", slug: "/bachelor" },
      { name: "Kreativwirtschaft", slug: "/bachelor" },
      { name: "Zurich Centre for Creative Economies (ZCCE)", slug: "/bachelor" },
      { name: "Medienstelle", slug: "/bachelor" },
      { name: "Jobs", slug: "/bachelor" },
      { name: "Alumni", slug: "/bachelor" },
      { name: "Fondation ZHdK", slug: "/bachelor" },
      { name: "Z-Kubator", slug: "/bachelor" },
      { name: "Intranet", slug: "/bachelor" },
    ],
  },
  {
    name: "Departemente",
    slug: "",
    theme: "orange",
    children: [
      { name: "Darstellende Künste und Film", slug: "/bachelor" },
      { name: "Design", slug: "/bachelor" },
      { name: "Kulturanalysen und Vermittlung", slug: "/bachelor" },
      { name: "Fine Arts", slug: "/bachelor" },
      { name: "Musik", slug: "/bachelor" },
    ],
  },
  {
    name: "Einblicke",
    slug: "",
    theme: "green",
    children: [
      { name: "News", slug: "/bachelor" },
      { name: "Jahresbericht 2020", slug: "/bachelor" },
      { name: "Studienprojekte", slug: "/bachelor" },
      { name: "Forschungsprojekte", slug: "/bachelor" },
      { name: "Output-Verzeichnis", slug: "/bachelor" },
      { name: "Veranstaltungen", slug: "/bachelor" },
      { name: "Personen", slug: "/bachelor" },
      { name: "Führungen", slug: "/bachelor" },
      { name: "Hochschulmagazin Zett", slug: "/bachelor" },
    ],
  },
];

const ExpandMenuWrapper = styled.ul`
  & li {
    position: relative;
    display: inline-block;
  }
  & > li:before {
    content: "";
    position: absolute;
    right: 100%;
    width: 25px;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    margin-right: 12px;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.1s ease-out, visibility 0.1s;
  }
  & > li:hover:before {
    visibility: visible;
    transform: none;
  }
  & .__sideNav {
    color: #9b9b9b;
    display: none;
    position: absolute;
    right: 100%;
    text-align: right;
    top: 20px;
    padding-right: 50px;
    padding-left: 20px;
    width: 18.75vw;
  }
  & li:hover > .__sideNav {
    display: flex;
  }
  & li li:hover {
    color: #fff;
  }
`;

const ExpandMenu = ({ onClick }) => {
  return (
    <div className="page-full bg-black">
      <PageWrapper>
        <ZHDKContainer className="py4">
          <div className="flex-cy flex-between">
            <MyLink href="/" style={{ marginLeft: "-70px" }}>
              <img src="/zhdk/zhdk-logo-white.svg" alt="Logo" width="220px" />
            </MyLink>
            <AnimateCross className="f-white" onClick={onClick} />
          </div>
        </ZHDKContainer>
        <ZHDKContainer>
          <ExpandMenuWrapper className="ul flex-col ai-start f-12 f-white mt8">
            {MAIN_NAV_LIST.map((item) => (
              <li key={item.name}>
                <MyLink
                  href={`${ZHDK_URL}${item.slug}`}
                  className={cx("fw7", `__${item.theme}`)}
                >
                  {item.name}
                </MyLink>
                <ul className="__sideNav f-3 ul fw7 flex-col">
                  {item.children.map((child) => (
                    <li key={child.name} className="mb2">
                      <MyLink href={`${ZHDK_URL}${child.slug}`}>{child.name}</MyLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ExpandMenuWrapper>
        </ZHDKContainer>
      </PageWrapper>
    </div>
  );
};

const DesktopNav = () => {
  const [state, setState] = useState(false);
  function onMenuExpand() {
    setState((prev) => !prev);
  }
  return (
    <ZHDKContainer>
      <div className="flex-cy flex-between">
        <MyLink href="/" style={{ marginLeft: "-70px" }}>
          <img src="/zhdk/zhdk-logo.svg" alt="Logo" width="220px" />
        </MyLink>
        <div className="flex-cy ">
          <div className="flex-cy f-gray-400 f-2">
            <button className="_btn bg-none fwb f-black" type="button">
              DE
            </button>
            <span>/</span>
            <button className="_btn bg-none fwb" type="button">
              EN
            </button>
          </div>
          <IconSearch className="mx2 hover:zoom pointer" />
          <AnimateHamburg onClick={onMenuExpand} />
        </div>
      </div>
      {state && (
        <InPortal id={PORTAL_CONTAINER_ID}>
          <ExpandMenu onClick={onMenuExpand} />
        </InPortal>
      )}
    </ZHDKContainer>
  );
};

const MobileNav = ({ data = MAIN_NAV_LIST }) => {
  return (
    <nav className="bg-white wfull px4 pt4 f-center">
      <ul className="flex-col ul">
        {data.map(({name, slug, children}) => (
          <li key={name} className="py2 fw5 f-5 border-bottom">
            <MyLink href={slug} className="block h8 lh8 px2 hover:color">{name}</MyLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ScrollWrapper = styled.div`
  will-change: transform;
  transition: transform 200ms linear;
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  &.is-pinned {
    display: block;
    transform: translateY(0%);
  }
  &.is-unpinned {
    transform: translateY(-100%);
  }
`;

const HeaderZHDK = ({ withBackground = true, absolute = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    const headroom = new Headroom(ref.current, {
      classes: {
        initial: "header",
        pinned: "is-pinned",
        unpinned: "is-unpinned",
        top: "is-top",
        notTop: "is-not-top",
        bottom: "is-bottom",
        notBottom: "is-not-bottom",
      },
    });
    headroom.init();
    return () => headroom.destroy();
  }, []);

  return (
    <div className={["my4", absolute ? "abs" : "relative"].join(" ")}>
      <div className="h100" />
      <ScrollWrapper ref={ref} className={withBackground ? "bg-white" : ""}>
        <HeaderWrapper
          className="py4"
          Nav={DesktopNav}
          PortalNav={MobileNav}
          breakpoint="md"
        />
      </ScrollWrapper>
    </div>
  );
};

export default memo(HeaderZHDK);

export const ZHDKStaticHeader = ({ absolute = false }) => (
  <div className={["my4 wfull", absolute ? "abs" : "relative"].join(" ")}>
    <div className="mx-auto px4" style={{ maxWidth: "80rem" }}>
      <HeaderWrapper
        className="py4"
        Nav={DesktopNav}
        PortalNav={MobileNav}
        breakpoint="md"
      />
    </div>
  </div>
);
