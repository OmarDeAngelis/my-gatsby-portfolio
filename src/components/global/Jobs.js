import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaCaretRight } from "react-icons/fa";
import styled from "styled-components";
import Title from "./Title";
const query = graphql`
  {
    allStrapiWork {
      nodes {
        company
        date
        id
        description {
          descrpition
          id
        }
        position
      }
    }
  }
`;

const Jobs = () => {
  const [value, setValue] = useState(0);
  const data = useStaticQuery(query);
  const {
    allStrapiWork: { nodes },
  } = data;
  const job = nodes[value];
  const { company, date, description, position } = job;
  return (
    <Wrapper>
      <Title text="Esperienze" type />
      <section className="content">
        <div className="btn-section">
          {nodes.map((item, index) => {
            const { company, id } = item;
            return (
              <div
                key={id}
                className="job-btn"
                role="button"
                onClick={() => setValue(index)}
              >
                <h5>{company}</h5>
                <div
                  className={`underline ${index === value && "active"}`}
                ></div>
              </div>
            );
          })}
        </div>
        <article>
          <div className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <h6>{date} - Present</h6>
          </div>
          {description.map((el) => {
            return (
              <div key={el.id} className="job-list">
                <span>
                  <FaCaretRight />
                </span>{" "}
                <p> {el.descrpition}</p>
              </div>
            );
          })}
        </article>
      </section>
      <Link to="/about/" className="btn">
        Learn More
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: var(--color-white);
  display: grid;
  gap: 1.5rem;
  place-items: center;
  .content {
    display: grid;
    gap: 1rem;
    .btn-section {
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      flex-wrap: wrap;
      .underline {
        opacity: 0;
        transition: var(--btn-transition);
      }
      .active {
        opacity: 1;
      }
      .job-btn {
        text-align: center;
        display: grid;
        gap: 0.2rem;
        transition: var(--btn-transition);
        border-radius: 16px;
        padding: 0.3rem 0.5rem;
        &:hover {
          cursor: pointer;
          color: var(--blue-green);
          .underline {
            opacity: 1;
          }
        }
      }
    }
    article {
      padding: 1rem;
      display: grid;
      place-items: center start;
      gap: 1rem;
      .job-info {
        justify-self: start;
        display: grid;
        gap: 0.3rem;
      }
      .job-list {
        display: flex;
        gap: 0.4rem;
        svg {
          color: var(--blue-green);
          font-size: 1.2em;
          margin-top: 0.2rem;
        }
        p {
          text-align: left;
          color: var(--color-black);
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    padding: 3rem 2rem;
    .content {
      grid-template-columns: auto auto;
      align-items: start;
      .btn-section {
        flex-direction: column;
        height: fit-content;
      }
      article {
        .job-info {
          gap: 0.7rem;
        }
      }
    }
  }
`;
export default Jobs;
