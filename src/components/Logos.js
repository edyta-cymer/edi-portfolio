import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Logos = () => {
  return (
    <section className="section-icons">
      <a href="https://github.com/edyta-cymer">
        <GitHubIcon
          style={{
            fontSize: "6rem",
            color: "#333",
            cursor: "pointer",
          }}
        />
      </a>
      <a href="https://linkedin.com/in/edytacymer">
        <LinkedInIcon
          style={{ fontSize: "6rem", color: "#333", cursor: "pointer" }}
        />
      </a>
    </section>
  );
};

export default Logos;
