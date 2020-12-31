const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStrapiJob {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  result.data.allStrapiJob.nodes.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.fields.slug}`,
      component: require.resolve("./src/templates/blogPage.js"),
      context: { slug: blog.fields.slug },
    });
  });
};
