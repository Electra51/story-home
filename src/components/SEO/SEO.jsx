/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";
import ogImage from "../../assets/home-image.png";
const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonicalUrl,
  author,
}) => {
  const siteUrl = " https://story-home-six.vercel.app";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />
    </Helmet>
  );
};

export default SEO;
