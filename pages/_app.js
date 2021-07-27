import { Fragment, useEffect } from "react";

import "styles/index.css";
import "@reach/skip-nav/styles.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  // const meta = Component.layoutProps?.meta;

  return (
    <>
      {/* {meta && (
        <MetaTags
          title={meta.metaTitle || meta.title}
          description={meta.metaDescription || meta.description}
        />
      )} */}
      <Component {...pageProps} />
    </>
  );
}
