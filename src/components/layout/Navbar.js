import React from "react";
import styled from "styled-components";
import Links from "../../constants/links";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { UseLayoutContext } from "../../context/layout-context";

const Navbar = () => {
  const { openSidebar } = UseLayoutContext();
  return (
    <Wrapper>
      <header className="section-center">
        <Link to="/" className="nav-brand">
          <h2>
            Web <span> Dev </span>
          </h2>
        </Link>

        <FaBars onClick={openSidebar} style={{ cursor: "pointer" }} />
      </header>
      <div className="section-center nav-links">
        <Links styleClass="navbar-links" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-brand {
      color: var(--navy-blue);
      text-shadow: 1px 0px 3px var(--color-black);
      h2 {
        color: inherit;
        span {
          color: var(--star-command-blue);
        }
      }
    }
    svg {
      font-size: 2em;
      color: var(--navy-blue);
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
      display: none;
    }
    .nav-links {
      display: block;
      .navbar-links {
        display: flex;
        gap: 2rem;
        li a {
          color: var(--color-balck);
          font-variant: small-caps;
          font-size: 1.2em;
          font-weight: 700;
        }
        li {
          background-color: transparent;
          transition: all 150ms linear;
          padding: 0.1rem 0.5rem;
          border-radius: 16px;
          &:hover {
            background-color: var(--powder-blue);
            cursor: pointer;
          }
          &:hover a {
            color: var(--dark-cornflower-blue);
          }
        }
      }
    }
  }
`;

export default Navbar;
