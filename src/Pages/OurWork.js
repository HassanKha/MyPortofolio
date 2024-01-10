import { React } from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import hassan2 from "../img/hassan2.JPG";
import hassan3 from "../img/hassan5.JPG";
import hassan4 from "../img/hassan4.JPG";
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

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
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
        <motion.h2 class="head" variants={Fade}>
          HEAD OF IT DEPARTMENT
        </motion.h2>
        <motion.h2 class="armour" variants={Fade}>
          The Main Armor 101 Workshop at Armed Forces
        </motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <Hide>
          <motion.img variants={photoAnim} src={hassan3} alt="athlete" />
        </Hide>
      </Movie>

      <Movie variants={Fade} initial="hidden" ref={element} animate={controls}>
        <h2>
        Led a Team of 3-4 Soldiers and 1-2 Non-Commissioned Officers in the IT Department,
Overseeing the Development and Maintenance of an Internal Private Website as a Full
Stack Developer .
        </h2>
        <h2>Managed the Server Manager of a LAN network and Clients, providing Technical Support
and Troubleshooting issues with Hardware and Software.</h2>
       
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={hassan4} alt="theracer" />
      </Movie>
      <Movie
        variants={Fade}
        initial="hidden"
        ref={element2}
        animate={controls2}
      >
        <h2>
        Successfully Solved Complex Database Query Problems as Technical Application
Support in Server Manager SQL.
        </h2>
        <h2>Implemented a Backup and Disaster Recovery Plan for the Network, ensuring Regular
Backups of Critical data and Establishing Procedures for System Failures or Data Loss </h2>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={hassan2} alt="goodtimes" />
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
@media only screen and (max-width: 600px) {
 
    width: 100%;
    img {
      height: 30vh !important;
  
    }
    h2 {
      font-size: 1.5rem !important;
    }
   }
  padding-bottom: 10rem;
  .armour {
    font-size: 2.6rem;
  }
  .head {
    font-size: 4rem;
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

export default OurWork;
