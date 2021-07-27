import Head from "next/head";
import { SITE_CONFIG, SITE_DESP, SITE_NAME, TWITTER_USER_NAME } from "lib/constants";

/**
 * [twitter:site]: for analytic use, not necessary
 */
export default function MetaTags({
  suffix = SITE_NAME,
  title,
  description = SITE_DESP,
  og = { slug: SITE_CONFIG.ogSlug, type: "website" },
  url = SITE_CONFIG.siteUrl,
  keywords = undefined,
  shouldIndex,
}) {
  const imgUrl = `${SITE_CONFIG.siteUrl}/images/og/${og.slug}`;
  const pageTitle = title ? title + (suffix ? ` - ${suffix}` : "") : SITE_NAME;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {!shouldIndex && <meta name="robots" content="noindex" />}
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Og */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      {/* Twitter */}
      <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
      <meta name="twitter:creator" content={`@${TWITTER_USER_NAME}`} />
      <meta name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={imgUrl} />
      <meta
        name="twitter:card"
        content={og.slug ? "summary_large_image" : "summary"}
      />
    </Head>
  );
}
