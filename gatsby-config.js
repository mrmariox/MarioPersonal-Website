module.exports = {
  siteMetadata: {
    author: `Mario Georgiev`,
    description: `Blog Posts, Communities`,
    keywords: `Mario, Georgiev, Secure Group, DevOps, Manager, Technical DevOps, Docker, Bash`,
    title: `Mario Georgiev's Space`,
    siteUrl: `https://mariogeorgiev.com`,
    social: {
      github: "mrmariox",
      linkedin: "mariogeorgiev",
      twitter: "mrmariox_",
    }
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mario Georgiev - Technical Manager`,
        short_name: `Mario Georgiev`,
        start_url: `/`,
        background_color: `#355366`,
        theme_color: `#355366`,
        display: `standalone`,
        icon: `src/images/icon.png`, 
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://mariogeorgiev.com",
        sitemap: "https://mariogeorgiev.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158941203-1",
        head: false,
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
  ],
}