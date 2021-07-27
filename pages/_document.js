import { PORTAL_CONTAINER_ID } from "lib/constants";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }


  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon.png" /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" type="image/x-icon"  href="/favicon.ico?v=2" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
          <Main />
          <div id={PORTAL_CONTAINER_ID} />
          <NextScript />
        </body>
      </Html>
    );
  }
}
