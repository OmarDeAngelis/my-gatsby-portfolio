import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const data = useStaticQuery(query);
  console.log(data);
  const {
    author,
    description: siteDescription,
    siteUrl,
    title: siteTitle,
  } = data.allSite.nodes[0].siteMetadata;
  return (
    <Helmet title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="charSet" content="utf-8"></meta>
      <meta name="lang" content="it"></meta>
      <meta name="author" content={author} />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;
