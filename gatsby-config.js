module.exports = {
  siteMetadata: {
    title: `Victor Wang`,
    description: `Victor Wang's portfolio`,
    author: `Victor Wang`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/projects/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: true,
        develop: true,
        tailwind: true,
        purgeOnly: ['/main.css'],
      },
    },
  ],
};
