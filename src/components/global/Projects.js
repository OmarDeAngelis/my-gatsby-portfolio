import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";
const Projects = ({ projects, title, shareLink }) => {
  console.log(projects);
  return (
    <Wrapper>
      <Title text={title} type="title" />
      <section className="content">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
      {shareLink && (
        <Link to="/projects/" className="btn">
          {" "}
          Vedi tutti
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--bg-color);
  display: grid;
  place-items: center;
  gap: 1.5rem;
  .content {
    display: grid;
    place-items: center;
    gap: 1rem;
  }
`;
export default Projects;
