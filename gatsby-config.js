module.exports = {
  siteMetadata: {
    title: `Space Trev`,
    description: `Space Trevs Portofolio showcasing his work`,
    author: `Space Trev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trevb.dev`,
        short_name: `trevbdev
        `,
        start_url: `/`,
        background_color: `#0f0f0f`,
        theme_color: `#0f0f0f`,
        icon: `src/images/TBLogoURL.png`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
