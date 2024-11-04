import { React } from "react";
import styled from "styled-components";
import OnDiet from "../img/OnDiet.png";
import Reddit from "../img/Reddit.png";
import Ignite from "../img/Ignite.png";
import WhatsApp from "../img/WhatsApp.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  Fade,
  photoAnim,
  LineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../Components/useScroll";
import ScrollTop from "./../Components/ScrollTop";

const Projects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      {/* Project 1: OnDiet */}
      <Movie>
        <Head>
          <motion.h2 className="head" variants={Fade}>
            OnDiet Application
          </motion.h2>
          <a href="https://on-diet.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <motion.h2 className="description" variants={Fade}>
          Calorie Counter & Diet Tracker App...
        </motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Hide>
          <motion.img variants={photoAnim} src={OnDiet} alt="OnDiet app" />
        </Hide>
      </Movie>

      {/* Project 2: Reddit */}
      <Movie ref={element} animate={controls}>
        <Head>
          <motion.h2 className="head" variants={Fade}>
            Reddit Application
          </motion.h2>
          <a href="https://reddit2-rose.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <h2 className="description">
          Reddit is a Social News Aggregation and Discussion Platform...
        </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <img src={Reddit} alt="Reddit app" />
      </Movie>

      {/* Project 3: WhatsApp */}
      <Movie ref={element2} animate={controls2}>
        <Head>
          <motion.h2 className="head" variants={Fade}>
            WhatsApp Application
          </motion.h2>
          <a href="https://whats-app-azure.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <h2 className="description">
          Chatting App to Communicate with your Customers in Web Chat Rooms...
        </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <img src={WhatsApp} alt="WhatsApp app" />
      </Movie>

      {/* Project 4: Ignite */}
      <Movie ref={element3} animate={controls3}>
        <Head>
          <motion.h2 className="head" variants={Fade}>
            Ignite Application
          </motion.h2>
          <a href="https://ignite-self.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <h2 className="description">
          A Search Engine Games App to help People find Game Information...
        </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <img src={Ignite} alt="Ignite app" />
      </Movie>

      <ScrollTop />
    </Work>
  );
};

// Styled Components
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Head = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-size: 1.8rem;
    }
    button {
      margin-top: 0.5rem;
    }
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .head {
    font-size: 3rem;
  }

  .description {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin: 2rem 0;
  }

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

    @media only screen and (max-width: 600px) {
      height: 30vh;
    }
  }

  button {
    color: black;
    background: #23d997;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
      background: #1fb080;
    }

    @media only screen and (max-width: 600px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame3 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame4 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
// Similar styles for Frame2, Frame3, Frame4 with different colors...

export default Projects;