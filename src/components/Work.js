import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import projects from "../PROJEKTY.json";

const Card = ({ title, text, number, link }) => {
  return (
    <div className="card card-one">
      <span className="work-span">{number}</span>
      <h2>{title}</h2>
      <p className="p-about p--work--margin">{text}</p>

      <a href={link} target="blank">
        <ArrowOutwardIcon className="arrow" style={{ fontSize: "5rem" }} />
      </a>
    </div>
  );
};

const Work = () => {
  return (
    <section className="section-work" id="work">
      {projects.map((el, index) => (
        <Card
          key={index}
          title={el.title}
          text={el.text}
          link={el.link}
          number={index + 1}
        />
      ))}
    </section>
  );
};

export default Work;
