import Head from 'next/head';

const SEO = ({ title, description, url, image, robots = "index, follow" }) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Key Learn Website Demo" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Title */}
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
