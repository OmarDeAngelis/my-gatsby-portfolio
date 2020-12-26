import React from "react";
import styled from "styled-components";
import Links from "../../constants/links";
import SocialLinks from "../../constants/socialLinks";
import { Link } from "gatsby";
import { IoCloseSharp } from "react-icons/io5";
import { UseLayoutContext } from "../../context/layout-context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = UseLayoutContext();

  return (
    <Wrapper className={`${isSidebarOpen ? "show-sidebar" : ""}`}>
      <header className="section-center">
        <Link to="/" className="nav-brand">
          <h2>
            Web <span> Dev </span>
          </h2>
        </Link>
        <IoCloseSharp style={{ cursor: "pointer" }} onClick={closeSidebar} />
      </header>
      <div className="nav-links">
        <Links styleClass="sidebar-links" closeFunc={closeSidebar} />
        <SocialLinks styleClass="sidebar-social" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);
  transform: translateX(-100%);
  transition: var(--transition);
  z-index: 999;
  header {
    padding: 1rem;
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
    width: 100%;
    display: grid;
    gap: 1.5rem;
    place-items: center;
    .sidebar-links {
      li a {
        color: var(--color-balck);
        font-variant: small-caps;
        font-size: 1.5em;
        font-weight: 700;
      }
      li {
        background-color: transparent;
        transition: all 150ms linear;
        padding: 0.5rem 0.5rem;
        margin-top: 1rem;
        border-radius: 16px;
        text-align: center;
        &:hover {
          background-color: var(--powder-blue);
          cursor: pointer;
        }
        &:hover a {
          color: var(--dark-cornflower-blue);
        }
      }
    }
    .sidebar-social {
      li {
        &:hover {
          cursor: pointer;
        }
        &:hover svg {
          color: var(--dark-cornflower-blue);
          transform: scale(1.2);
        }
      }
      svg {
        transition: var(--btn-transition);

        font-size: 2em;
        color: var(--color-black);
      }
    }
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
