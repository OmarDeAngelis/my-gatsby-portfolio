import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import Title from "./Title";
import { FaShareSquare, FaGithubSquare } from "react-icons/fa";
const Project = ({ title, description, github, url, image, stack }) => {
  return (
    <Wrapper>
      <div className="prd-img">
        <Image
          fluid={image.childImageSharp.fluid}
          imgStyle={{ width: "100%" }}
        />
      </div>
      <div className="info">
        <Title text={title} />
        <p>{description}</p>
        <div className="stack">
          {stack.map((el) => {
            return <span key={el.id}>{el.descrpition}</span>;
          })}
        </div>
        <div className="urls">
          <span>
            <a href={url}>
              <FaShareSquare />
            </a>
          </span>
          <span>
            <a href={github}>
              <FaGithubSquare />
            </a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem;
  display: grid;
  place-items: center;
  gap: 1rem;
  width: 100%;
  .prd-img {
    width: 100%;
    div {
      width: 100%;
      max-width: 100%;
      height: 19rem;
      border-radius: 0.35rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #43c6ac; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #191654,
          #43c6ac
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #191654,
          #43c6ac
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        opacity: 0.45;
        z-index: 2;
        transition: var(--transition);
      }
    }
  }
  .info {
    padding: 1rem 0.25rem;
    background-color: var(--color-white);
    box-shadow: 3px 8px 10px var(--shadow);
    border-radius: var(--radius);
    display: grid;
    gap: 1rem;
    p {
      width: 95%;
      margin: auto;
      font-size: 0.92em;
      line-height: 1.6;
    }
    .stack {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      gap: 1rem;
      span {
        background-color: var(--color-gray-bg);
        text-align: center;
        font-size: 0.95em;
        border-radius: var(--radius);
        font-variant: small-caps;
        font-weight: 700;
        text-transform: lowercase;
        padding: 0.23rem 0.375rem;
      }
    }
    .urls {
      width: 94%;
      margin: auto;
      display: flex;
      gap: 1rem;
      svg {
        color: var(--blue-green);
        font-size: 1.5rem;
      }
    }
  }
  &:hover .prd-img div::before {
    opacity: 0;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    .prd-img {
      grid-column: 1 / span 8;
      grid-row: 1/1;
      div {
        height: 25rem;
      }
    }
    .info {
      grid-column: 5/ 12;
      grid-row: 1/1;
      z-index: 10;
    }
    &:nth-of-type(even) .prd-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    &:nth-of-type(even) .info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`;

export default Project;
