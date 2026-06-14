import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../lib/assetPath';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title,
  description = 'Portfolio of Ing. Michal Tkáč — Data Engineer showcasing work experience and school projects.',
  path = '',
  image = `${SITE_URL}/images/profile_picture.jfif`,
  type = 'website',
}: SEOProps) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MTweb" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
