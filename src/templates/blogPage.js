import React from "react";
import Layout from "../components/layout/layout";
import ReactMarkdown from "react-markdown";
import Image from "gatsby-image";
import Blogs from "../components/global/Blogs";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/global/SEO";

const blogPage = ({ data }) => {
  const {
    content,
    title,
    riassunto,
    image: {
      childImageSharp: { fluid },
    },
  } = data.strapiJob;

  const {
    allStrapiJob: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <SEO title={title} description={riassunto} />
      <Wrapper>
        <section className="blog-article">
          <Image fluid={fluid} className="img" />
          <ReactMarkdown children={content}></ReactMarkdown>
        </section>
        <Blogs blogs={blogs} title="Articoli Correlati" />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String!) {
    strapiJob(fields: { slug: { eq: $slug } }) {
      date
      id
      title
      content
      riassunto
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allStrapiJob(
      limit: 3
      sort: { order: ASC, fields: date }
      filter: { fields: { slug: { ne: $slug } } }
    ) {
      nodes {
        category
        date(formatString: "MM/D/YYYY")
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

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--color-white);

  .blog-article {
    display: grid;
    gap: 0.8rem;
    pre {
      background-color: var(--color-black);
      color: var(--color-white);
      width: max-content;
      padding: 0.55rem;
      border-radius: 0.12rem;
    }
    h1 {
      color: var(--star-command-blue);
      justify-self: center;
      font-size: 2.3em;
    }
    p {
      font-size: 0.95em;
      line-height: 1.5;
    }
    @media screen and (min-width: 992px) {
      gap: 1.3rem;
      width: 80%;
      margin: auto;
      .img {
        width: 100%;
        height: 25rem;
        justify-self: center;
      }
      pre {
        width: max-content;
        padding: 0.55rem;
        border-radius: 0.12rem;
        justify-self: center;
      }
      p {
        color: var(--color-gray-p);
        line-height: 1.8;
        strong {
          color: var(--color-black);
        }
      }
    }
  }
`;

export default blogPage;
