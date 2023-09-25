import React from "react";
import photothree from "../photos/footer.jpg";

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
      ></div>
    </footer>
  );
};
