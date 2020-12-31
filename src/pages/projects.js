import React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import AllProjects from "../components/global/Projects";
import SEO from "../components/global/SEO";

const Projects = ({ data }) => {
  const {
    allStrapiPoject: { nodes: projects },
  } = data;
  return (
    <Layout>
      <SEO
        title="My Projects"
        description="discover the lasto projects that I created and find the wright one that can inspire you"
      />
      <AllProjects projects={projects} title="All my projects" />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiPoject {
      nodes {
        title
        id
        description
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          descrpition
          id
        }
      }
    }
  }
`;

export default Projects;
