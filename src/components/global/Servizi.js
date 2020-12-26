import React from "react";
import styled from "styled-components";
import Title from "./Title";
import servizi from "../../constants/servizi";
const Servizi = () => {
  return (
    <Wrapper>
      <Title text="Servizi" type="title" />
      <div className="section-center card-section">
        {servizi.map((item) => {
          const { id, title, icon, text } = item;
          return (
            <article className="card" key={id}>
              <span>{icon}</span>
              <Title text={title} />
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-white);
  padding: 2rem;
  .card-section {
    width: 95%;
    margin: 2rem auto 0 auto;
    display: grid;
    place-items: center;
    gap: 2rem;
    .card {
      border-radius: 1rem;
      padding: 2rem 1rem;
      border: 2px solid var(--bg-color);
      box-shadow: 2px 10px 15px 2px var(--shadow);
      display: grid;
      gap: 0.5rem;
      place-items: center;
      color: var(--dark-cornflower-blue);
      transition: var(--transition);
      svg {
        font-size: 2em;
      }
      h4 {
        text-transform: capitalize;
      }
      p {
        text-align: center;
        color: var(--color-black);
      }
      &:hover {
        background-color: var(--cerulean-crayola);
        color: var(--powder-blue);
        transform: scale(1.04);
        cursor: pointer;
        p {
          color: var(--bg-color);
        }
      }
    }
    @media screen and (min-width: 768px) {
      padding: 2rem 0;
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Servizi;
