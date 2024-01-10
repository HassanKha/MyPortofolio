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
      exit="exitt"
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
      <Movie>
        <Head>
          <motion.h2 class="head" variants={Fade}>
            OnDiet Application
          </motion.h2>
          <a href="https://on-diet.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <motion.h2 class="armour" variants={Fade}>
          Calorie Counter & Diet Tracker App Whether you want to lose Weight,
          Tone up, Get Healthy, Change your Habits, or Start a New Diet without
          Deprivation!
        </motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <Hide>
          <motion.img variants={photoAnim} src={OnDiet} alt="athlete" />
        </Hide>
      </Movie>

      <Movie variants={Fade} initial="hidden" ref={element} animate={controls}>
        <Head>
          <motion.h2 class="head" variants={Fade}>
            Reddit Application
          </motion.h2>
          <a href="https://reddit2-rose.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <h2>
          Reddit is a Social News Aggregation and Discussion Platform where
          Users can Submit Content, Including Links, Images, and Text Posts, and
          other Users can Vote and Comment on those Submissions.
        </h2>

        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={Reddit} alt="theracer" />
      </Movie>
      <Movie
        variants={Fade}
        initial="hidden"
        ref={element2}
        animate={controls2}
      >
        <Head>
          <motion.h2 class="head" variants={Fade}>
            WhatsApp Application
          </motion.h2>
          <a href="https://whats-app-azure.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>
        <h2>
          Chatting App allows you to Communicate with your Customers in Web Chat
          Rooms. It Enables you to Send and Receive Messages. It make it easier,
          simpler, and faster to Connect with Everyone and it is also easy to
          Use.
        </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={WhatsApp} alt="goodtimes" />
      </Movie>
      <Movie
        variants={Fade}
        initial="hidden"
        ref={element3}
        animate={controls3}
      >
        <Head>
          <motion.h2 class="head" variants={Fade}>
            Ignite Application
          </motion.h2>
          <a href="https://ignite-self.vercel.app/">
            <button type="button">View App</button>
          </a>
        </Head>

        <h2>
          A Search Engine Games App helps People find the Information about Game
          They are Looking for Online using Keywords or Phrases. Search Engines
          are able to Return Results Quickly even with Millions of Websites
          Online by Scanning the Internet Continuously and Indexing Every Page.
        </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={Ignite} alt="goodtimes" />
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Head = styled(motion.div)`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
   @media only screen and (max-width: 600px) {
   
    margin: auto;
      h2 {
        font-size: 2rem !important;
      }
   }
`;
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media only screen and (max-width: 600px) {
  
   }
`;
const Movie = styled(motion.div)`
 @media only screen and (max-width: 600px) {
    width: 100%;
    img {
      height: 10vh !important;
  
    }
    h2 {
      font-size: 1.3rem !important;
    }
   }

  button {
    color: black;
    margin-left: 1rem;
    height: 70%;
    :hover {
      background-color: #23d997;
      transition: 0.2s linear;
    }
  }
  padding-bottom: 10rem;
  .armour {
    font-size: 2rem;
  }
  .head {
    font-size: 4rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  }
`;
const Hide = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 600px) {
    width: 100%;

     
    
   }
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
