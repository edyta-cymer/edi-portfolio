import React from "react";
import { ReactComponent as WavingHand } from "../photos/wavingHand.svg";


const Home = () => {
 
  return (
    <section className="home">
      <h1 className="h1-main">
        Hi! My name is Edyta <WavingHand className="svg-height"/><br></br>
      </h1>
      <h4>And I would like to become a Front-End Developer!</h4>
    </section>
  );
};

export default Home;
