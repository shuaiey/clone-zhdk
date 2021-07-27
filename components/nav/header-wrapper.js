import cx from "classnames";
import HamburgButton from "components/button/hamburg-button";
import { SITE_NAME } from "lib/constants";
import { SkipNavLink } from "@reach/skip-nav";
import usePortal from "utils/hooks/usePortal";
import MyLink from "components/basic/my-link";

export default function HeaderWrapper({
  Nav,
  PortalNav,
  breakpoint = "sm",
  className,
  navClassName,
  Logo,
  ...rest
}) {
  const [, onDPOpen, onDPClose, Portal] = usePortal({ animate: false });
  return (
    <>
      <header className={className}>
        <h1 className="sr-only" aria-hidden="true">
          {SITE_NAME}
        </h1>
        <SkipNavLink tabIndex="0" />
        <nav className={cx("flex-cy", navClassName)}>
          {Logo && (
            <MyLink href="/" className="hover:color">
              <Logo height="2rem" className="block" />
            </MyLink>
          )}
          <div className={cx("flex-auto", `${breakpoint}:hidden`)}>
            <Nav {...rest} />
          </div>
          <div className={`${breakpoint}:visible`}>
            <HamburgButton
              size="24"
              className="p2 bg-none f-black"
              onClick={onDPOpen}
            />
          </div>
        </nav>
      </header>
      <Portal className="wfull fixed" full top="3rem">
        <PortalNav onClose={onDPClose} {...rest} />
      </Portal>
    </>
  );
}
