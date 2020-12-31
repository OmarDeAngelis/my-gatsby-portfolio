import React from "react";
import styled from "styled-components";
import SocialLinks from "../../constants/socialLinks";
const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <h4>All product reserved &copy; of WebDev</h4>
        <SocialLinks></SocialLinks>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 1.5rem 2rem;
  background-color: var(--color-black);
  width: 100%;
  display: grid;
  place-items: center;
  .content {
    display: grid;
    place-items: center;
    gap: 1rem;
  }
  h4 {
    color: white;
  }
  svg {
    color: var(--blue-green) !important;
  }
`;
export default Footer;
