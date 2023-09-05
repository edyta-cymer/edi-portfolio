import React from "react";
import photothree from "../photos/footer.jpg";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: `url(${photothree})`,
          backgroundSize: "cover",
          opacity: "0.2",
        }}
        className="footer"
      >
        {/* <div className="icons">
          <InstagramIcon fontSize="large"></InstagramIcon>
          <LinkedInIcon fontSize="large" />
        </div> */}
      </div>

      {/* <img src={photothree} alt="shoes on tv" className="footer-photo"></img> */}
    </footer>
  );
};
