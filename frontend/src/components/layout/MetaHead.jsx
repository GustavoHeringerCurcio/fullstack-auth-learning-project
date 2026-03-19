import { Helmet } from "react-helmet-async";
import { buildOGMeta } from "../../config/og.config";

/**
 * MetaHead Component
 * Manages dynamic Open Graph and meta tags for each page
 * 
 * @param {Object} props
 * @param {string} props.pageKey - Key from pageMetadata config (e.g., 'home', 'login', 'chatbot')
 * @param {Object} props.customMeta - Optional custom metadata to override defaults
 * @param {string} props.customMeta.title - Custom page title
 * @param {string} props.customMeta.description - Custom meta description
 * @param {string} props.customMeta.image - Custom OG image URL
 * @param {string} props.customMeta.url - Custom canonical URL
 */
export default function MetaHead({ pageKey = "home", customMeta = {} }) {
  const ogData = buildOGMeta(pageKey, customMeta);

  return (
    <Helmet>
      {/* Base Meta Tags */}
      <title>{ogData.title}</title>
      <meta name="description" content={ogData.description} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogData.type} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:image:width" content={ogData.imageWidth} />
      <meta property="og:image:height" content={ogData.imageHeight} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:locale" content={ogData.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" content={ogData.description} />
      <meta name="twitter:image" content={ogData.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogData.url} />
    </Helmet>
  );
}
