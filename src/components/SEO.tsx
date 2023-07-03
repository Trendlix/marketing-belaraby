import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SEOProps {
  title?: string | null;
  description?: string | null;
  locale?: string | null;
  article?: boolean | null;
  image?: string | null;
  imageAlt?: string | null;
  pathname: string | null;
  categories?: string[] | null;
  publishedTime?: string | null;
  children?: React.ReactNode | null;
}

const metaData = {
  author: 'Hamed Osama',
  title: 'ماركتنج بالعربي | Marketing Bel Araby',
  description: 'ماركتنج بالعربي هي أول منصة عربية في الشرق الاوسط بتساعدك تعرف اخر الاخبار في مجال الديجيتال ماركتنج و السوشيال ميديا عشان تكون دايما على دراية بكل ما يخص المجال',
  image: '/images/og_banner.png',
  siteUrl: 'https://marketingbelaraby.com',
  DomainURL: 'https://marketingbelaraby.com',
  twitterUsername: '@trendlix',
  locale: 'ar',
}

export const SEO = ({ article = false, publishedTime, title, description, pathname, locale, image, categories, children }: SEOProps) => {
  const { title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    author,
    siteUrl,
    DomainURL,
    twitterUsername
  } = metaData

  const seo = {
    article,
    author,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? image : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    locale: locale || 'ar',
    categories,
    date: publishedTime || new Date().toISOString(),
  }

  return (
    <>

      <title>{seo.title}</title>
      <meta charSet="UTF-8" />
      <meta name='description' content={seo.description} />
      <meta name='distribution' content='global' />
      <meta name='audience' content='all' />
      <meta name='coverage' content='Worldwide' />
      {/* <meta name='topic' content={keywords.join(', ')} /> */}
      <meta name='summary' content={seo.description} />
      <meta name='author' content='Hamed Osama' />
      {/* <meta name='keywords' content={keywords.join(', ')} /> */}
      <meta
        name='viewport'
        content='width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0'
      />
      {/* <!-- Google tags --> */}
      <meta name="name" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={`${seo.image}`} />
      <meta httpEquiv='Content-Language' content={seo.locale} />
      <meta name="locale" content={seo.locale} />
      {/* <!-- Facebook tags --> */}
      <meta property="og:url" content={`${seo.url}`} />
      {!seo.article && <meta name="og:type" content="website" />}
      {seo.article && (
        <>
          <meta name="og:type" content="article" />
          <meta name="article:published_time" content={seo.date} />
          <meta name="article:author" content={seo.author} />
          <meta name="article:section" content="Technology" />
          {seo?.categories?.map((category: string) => (
            <meta
              key={category}
              name="article:tag"
              content={category}
            />
          ))}
        </>
      )}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={`${seo.image}`} />
      {/* <!-- Twitter tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${seo.image}`} />
      <meta name='twitter:creator' content={`${seo.twitterUsername}`} />
      <meta name='twitter:site' content={`${seo.twitterUsername}`} />
      <meta name='twitter:domain' content={`${seo.url}`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='600' />
      <meta property='og:image' name="image" content={`${seo.image}`} />
      <meta property='og:image:alt' content={`${seo.title}`} />
      <meta property='og:site_name' content={`${seo.title}`} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={seo.url} />
      <link rel='canonical' href={seo.url} />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name="url" content={seo.url} />
      <meta name="name" content={`${seo.title}`} />


      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content={`${seo.title}`} />
      <meta name='application-name' content={`${seo.title}`} />

      {/* <link rel='apple-touch-icon' sizes='180x180' href='/manifest/apple-touch-icon.png' />
      <meta name='msapplication-TileColor' content='#101010' />
      <meta name='theme-color' content='#848a9a' />

      <link rel='manifest' href='/manifest/manifest.json' />
      <link rel='icon' type='image/png' sizes='32x32' href='/manifest/icon32.png' />
      <link rel='icon' type='image/svg+xml' sizes='16x16' href='/manifest/icon16.png' />
      <link rel='shortcut icon' href='/manifest/favicon.ico' type='image/svg+xml' />

      <link rel='icon' href='/manifest/favicon.ico' type='image/svg+xml' /> */}

      {/* <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}
      {children}
    </>
  )

}