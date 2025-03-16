import React from "react";
import { ReactComponent as WavingHand } from "../photos/wavingHand.svg";
import { motion } from "framer-motion"


const Home = () => {
 
  return (
    <section className="home">
      <h1 className="h1-main">
         
        <motion.div
  whileHover={{ scale: 1.2 }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 4 }}
  
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
>Hi! My name is Edyta <WavingHand className="svg-height"/><br></br></motion.div>
      </h1>
      <h4>And I would like to become a Front-End Developer!</h4>
    </section>
  );
};

export default Home;
