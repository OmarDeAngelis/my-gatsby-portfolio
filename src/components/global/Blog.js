import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Title from "./Title";
const Blog = ({
  fields,
  category,
  date,
  title,
  riassunto,
  image: {
    childImageSharp: { fluid },
  },
}) => {
  return (
    <Link to={`/blogs/${fields.slug}`} style={{ color: "var(--color-black)" }}>
      <Wrapper>
        <Title text={title} />
        <Image fluid={fluid} className="blog-img" />
        <p>{riassunto}</p>
        <div className="info">
          <span>{date}</span>
          <span className="category">{category}</span>
        </div>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.article`
  padding: 2rem 1rem;
  background-color: var(--bg-color);
  border-radius: var(--radius);
  text-decoration: none;
  box-shadow: 3px 8px 10px var(--shadow);
  display: grid;
  gap: 0.7rem;
  .blog-img {
    border-radius: var(--radius);
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .category {
      background-color: var(--color-gray);
      text-align: center;
      font-size: 1.1em;
      border-radius: var(--radius);
      font-variant: small-caps;
      font-weight: 700;
      text-transform: lowercase;
      padding: 0.23rem 0.375rem;
    }
  }
  .btn {
    justify-self: center;
    height: fit-content;
  }
  @media screen and (min-width: 992px) {
    grid-template-rows: auto 1fr 0.4fr auto auto;
    p {
      font-size: 0.875em;
    }
    max-height: 500px;
  }
`;

export default Blog;
