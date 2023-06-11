import type { GatsbyConfig } from "gatsby";

import sanityConfig from "./sanity-config";

const config: GatsbyConfig = {
  siteMetadata: {
    author: 'Hamed Osama',
    title: 'ماركتنج بالعربي',
    description: 'ماركتنج بالعربي',
    image: '/images/og_banner.png',
    siteUrl: 'https://marketingbelaraby.com',
    DomainURL: 'https://marketingbelaraby.com',
    twitterUsername: '@trendlix',
    locale: 'ar',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          breakpoints: [640, 768, 1280, 1920],
          // backgroundColor: `transparent`,
          // quality : 100
        }
      }
    },
    "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig
      }
    }
  ]
};

export default config;
