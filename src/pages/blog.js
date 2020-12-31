import React from "react";
import Layout from "../components/layout/layout";
import Blogs from "../components/global/Blogs";
import { graphql } from "gatsby";
import SEO from "../components/global/SEO";

const Blog = ({ data }) => {
  const {
    allStrapiJob: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <SEO
        title="Blog"
        description="A simple Blog written by a Web Developer for helping you to understand better what can be the wright choice for your business"
      />
      <Blogs blogs={blogs} title="Blog" />
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  {
    allStrapiJob(sort: { order: ASC, fields: date }) {
      nodes {
        category
        date(formatString: "MMMM, Do, YYYY")
        id
        title
        riassunto
        fields {
          slug
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
