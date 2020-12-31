import React from "react";
import Layout from "../components/layout/layout";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Title from "../components/global/Title";
import SEO from "../components/global/SEO";

const About = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data;
  return (
    <Layout>
      <SEO
        title="About"
        description="What a Web Developer Does and how can he really helps you? Discover more About me"
      />
      <Wrapper>
        <section className="content">
          <Title text="About Me" type className="title"></Title>
          <div className="info">
            <p>
              I'm baby hella affogato schlitz 3 wolf moon celiac dreamcatcher.
              Four dollar toast umami blue bottle, brooklyn mumblecore meggings
              heirloom seitan venmo 3 wolf moon hella yr austin. Hella
              mumblecore next level four dollar toast gluten-free vegan copper
              mug. Swag bushwick vape, franzen migas locavore plaid squid
              humblebrag messenger bag before they sold out hashtag knausgaard
              stumptown. Retro fanny pack 90's, chillwave kinfolk pinterest food
              truck kickstarter hoodie flannel wolf art party sartorial
              bushwick. Vegan viral prism, artisan art party gastropub snackwave
              whatever.
            </p>
            <Image fluid={fluid} className="img" />
          </div>
          <Link to="/projects/" className="btn">
            {" "}
            Look My Reference{" "}
          </Link>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  height: 100%;
  margin-top: -5rem;
  padding-top: 5rem;
  display: grid;
  gap: 1rem;
  .title {
    height: fit-content;
  }
  .content {
    height: 95%;
    margin: auto;
    display: grid;
    gap: 1rem;
    padding: 2rem;
    .info {
      display: grid;
      gap: 1rem;
      p {
        text-align: center;
      }
    }
    .btn {
      height: fit-content;
      justify-self: center;
    }
    @media screen and (min-width: 992px) {
      .info {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        p {
          grid-column: 1/7;
          text-align: left;
          grid-row: 1/1;
        }
        .img {
          grid-column: 7/12;
          grid-row: 1/1;
          height: 28rem;
        }
      }
    }
  }
`;

export const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
