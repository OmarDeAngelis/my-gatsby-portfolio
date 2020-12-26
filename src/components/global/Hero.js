import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SocialLink from "../../constants/socialLinks";

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data;
  return (
    <Wrapper>
      <article className="hero">
        <div className="hero-info">
          <div className="underline"></div>
          <h2>Eccomi: Thomas</h2>
          <h4>Web and Mobile UI/UX Designer</h4>
          <Link to="/contact/" className="btn">
            {" "}
            Contattami{" "}
          </Link>
          <SocialLink />
        </div>
        <Image className="hero-img" fluid={fluid} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: var(--bg-color);
  margin-top: -5rem;
  padding-top: 5rem;
  position: relative;

  .hero {
    padding: 2rem;
    display: grid;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    .hero-img {
      display: none;
    }
    .hero-info {
      display: grid;
      gap: 1rem;
      .underline {
        margin: 0 auto 0 0;
      }
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 70%;
        right: 0;
        bottom: 0;
        background: var(--color-white);
      }
      .hero-info {
        grid-column: 1 / 6;
      }

      .hero-img {
        display: block;
        grid-column: 6/-1;
        grid-row: 1/1;
        height: 100%;
        overflow: hidden;
      }
    }
  }
`;
export default Hero;
