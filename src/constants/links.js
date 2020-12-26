import React from "react";
import { Link } from "gatsby";
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass, closeFunc = "" }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {data.map((link) => {
        if (closeFunc) {
          return (
            <li key={link.id}>
              <Link onClick={closeFunc} to={link.url}>
                {link.text}{" "}
              </Link>
            </li>
          );
        } else {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text} </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
