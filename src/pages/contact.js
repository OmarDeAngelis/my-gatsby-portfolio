import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import Title from "../components/global/Title";
import SEO from "../components/global/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="Contact Me and a professional Web Developer is going to answer you in less than 24 hours"
      />
      <Wrapper>
        <section>
          <Title text="Contattami ora" type />
          <form
            action="https://formspree.io/f/mnqoowoj"
            method="POST"
            className="form-control"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="NOME"
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="EMAIL"
              />
              <textarea rows="5" name="message" placeholder="MESSAGGIO" />
            </div>
            <button type="submit" className="btn">
              Contattami
            </button>
          </form>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-gray-bg);
  height: 100vh;
  margin-top: -5rem;
  padding-top: 5rem;
  section {
    position: absolute;
    padding: 2rem;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    gap: 2rem;
    .form-control {
      padding: 1rem;
      background-color: var(--color-white);
      border-radius: var(--radius);
      display: grid;
      gap: 1rem;
      box-shadow: 8px 8px 8px var(--shadow);
      @media screen and (min-width: 992px) {
        width: 60%;
        margin: auto;
      }
      .form-group {
        padding: 1rem;
        width: 95%;
        margin: auto;
        display: grid;
        place-items: center;
        gap: 1rem;
        .form-input {
          background-color: var(--bg-color);
          width: 100%;
          padding: 0.5rem;
          border: none;
        }
        textarea {
          padding: 0.5rem;
          background-color: var(--bg-color);

          border: none;
          width: 100%;
          &:focus {
            background-color: #e8f0fe;
          }
        }
      }
      .btn {
        justify-self: center;
      }
    }
  }
`;
export default Contact;
