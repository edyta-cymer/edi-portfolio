import { Link } from "react-scroll";

import React from "react";

export const Nav = () => {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Edyta Cymer
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="main-nav-link"
            >
              Work
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/edytacymer"
              target="_blank"
              rel="noreferrer"
              className="main-nav-link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="getintouch"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="main-nav-link"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
