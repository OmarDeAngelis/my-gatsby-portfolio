import React from "react";
import styled from "styled-components";
import Blog from "./Blog";
import Title from "./Title";
import { Link } from "gatsby";
const Blogs = ({ blogs, title, shareLink }) => {
  return (
    <Wrapper>
      <Title text={title} type="title" />
      <section className="content">
        {blogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </section>
      {shareLink && (
        <Link to="/blog/" className="btn">
          {" "}
          Vedi tutti
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--color-white);
  display: grid;
  place-items: center;
  gap: 1.5rem;
  .content {
    display: grid;
    gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    .content {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Blogs;
