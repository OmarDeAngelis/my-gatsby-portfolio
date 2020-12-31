module.exports = {
  siteMetadata: {
    title: "Web Developer Portfolio",
    description: "Questo è un portfolio di prova per imparare a usare Gatsby",
    siteUrl: "https://portfolio-thomas-gatsby.netlify.app/",
    author: "@thomasD",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`job`, `work`, "poject"],
        //If using single types place them in this array.
      },
    },
    {
      resolve: "gatsby-plugin-slug-field",
      options: {
        filter: { internal: { type: "StrapiJob" } },
        source: "title",
        fieldName: "slug",
      },
    },
  ],
};
