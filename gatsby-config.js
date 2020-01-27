module.exports = {
  siteMetadata: {
    title: `Victor Wang`,
    description: `Victor Wang's portfolio`,
    author: `Victor Wang`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`, // Must come after postcss plugin
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly: ['/main.css'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
  ],
};
