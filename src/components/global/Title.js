import React from "react";
import styled from "styled-components";

const Title = ({ text, type = "" }) => {
  if (type) {
    return (
      <Wrapper>
        <h2>{text || "Inserisci Titolo"}</h2>
        <div className="underline"></div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h4>{text || "Inserisci Titolo"}</h4>
        <div className="underline"></div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  gap: 0.6rem;
`;

export default Title;
