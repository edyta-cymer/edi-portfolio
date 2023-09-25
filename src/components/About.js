import React from "react";
import photoone from "../photos/DSC_5624c.jpeg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section className="section-about" id="about">
        <figure>
          <img src={photoone} className="photo-one" alt="back"></img>
        </figure>

        <aside>
          <p className="p-about p-about-margin">
            After 7 years of experience in the music industry as a singer, vocal
            coach, and music teacher, I have decided to change my career path.
            Since then, I have been consistently developing my skills in the IT
            industry, with a focus on programming languages such as
            <span className="span"> JavaScript</span> and{" "}
            <span className="span">React</span>. In the near future, I would
            also like to learn <span className="span">Next.js</span>.
          </p>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="main-nav-link"
          >
            <ArrowDownwardIcon className="arrow" style={{ fontSize: "4rem" }} />
          </Link>
        </aside>
      </section>
    </>
  );
};

export default About;
