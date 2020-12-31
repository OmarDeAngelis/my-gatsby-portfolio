import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import Servizi from "../components/global/Servizi";
import Jobs from "../components/global/Jobs";
import { graphql } from "gatsby";
import Projects from "../components/global/Projects";
import Blogs from "../components/global/Blogs";
import SEO from "../components/global/SEO";

// markup
const IndexPage = ({ data }) => {
  const {
    allStrapiPoject: { nodes: projects },
    allStrapiJob: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home del sito: qui troverai i miei projects, il mio blog e le informazioni sulla mia carriera di sviluppatore Web"
      />
      <Hero />
      <Servizi />
      <Jobs />
      <Projects
        projects={projects.slice(0, 3)}
        title="Last Projects"
        shareLink
      />
      <Blogs blogs={blogs} title="Last Article" shareLink />
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
    allStrapiJob(limit: 3, sort: { order: ASC, fields: date }) {
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

export default IndexPage;
