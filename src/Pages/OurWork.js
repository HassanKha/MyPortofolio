import { React } from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import hassan2 from "../img/hassan2.JPG";
import hassan3 from "../img/hassan5.JPG";
import hassan4 from "../img/hassan4.JPG";
import hassan from "../img/32842 (1).jpg";
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
          Information Technology Army Officer
        </motion.h2>
        <motion.h2 class="armour" variants={Fade}>
          Egyptian Armed Forces | The Main Armor 101 Workshop
        </motion.h2>
        <motion.h6>
        2022 April – 2023 October
<span>Hikestep, Cairo, Egypt</span>
        </motion.h6>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <motion.h3>
         During my tenure as a <span>Reserve Army Officer</span> , 101 Workshop was
          Responsible for the Production of Engines and other Equipment for
          Armor , I held the Positions of :
        </motion.h3>
        <motion.h5>
        <span>•</span> <span>Lieutenant</span> <u>2022 April</u> - <u>2022 December</u> .
          <br />
          <span>•</span> <span>First Lieutenant</span> <u>2022 December</u> - <u>2023 October</u> .
        </motion.h5>
        <Hide>
          <motion.img variants={photoAnim} src={hassan} alt="athlete" />
        </Hide>
      </Movie>

      <Movie variants={Fade} initial="hidden" ref={element} animate={controls}>
        <h3>
        🟢 Led a Team of 3-4 Soldiers and 1-2 Non-Commissioned Officers in the IT
          Department, Overseeing the Development and Maintenance of an Internal
          Private Website as a <span>Full Stack Developer</span> .
        </h3>
        <h3>
        🟢 Managed the <span>Server Manager of a LAN network and Clients</span>, providing
          Technical Support and Troubleshooting issues with Hardware and
          Software.
        </h3>
        <h3>
        🟢 Responsible for the Installation, Configuration, and Maintenance of Server
Infrastructure, Including <span>𝐀𝐜𝐭𝐢𝐯𝐞 𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫𝐲</span> Services, Managing <span>𝐔𝐬𝐞𝐫 𝐀𝐜𝐜𝐨𝐮𝐧𝐭𝐬</span>, <span>𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧𝐬</span>, <span>𝐆𝐫𝐨𝐮𝐩 𝐏𝐨𝐥𝐢𝐜𝐢𝐞𝐬</span>, and other Network-Related Tasks as a
<span> 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨r</span>
        </h3>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={hassan3} alt="theracer" />
      </Movie>
      <Movie
        variants={Fade}
        initial="hidden"
        ref={element2}
        animate={controls2}
      >
        <h3>
        🟢 Successfully Solved Complex Database Query Problems as <span>Technical
          Application Support</span> in Server Manager <span>SQL</span>
        </h3>
        <h3>
        🟢 Implemented an Auto <span>𝐁𝐚𝐜𝐤𝐮𝐩</span> for <span>𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞</span> and for the Network, ensuring
Regular Backups of Critical data and Establishing Procedures for System Failures
or Data Loss
        </h3>
        <motion.div variants={LineAnim} className="line"></motion.div>

        <img src={hassan4} alt="goodtimes" />
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
  padding-bottom: 1rem;
  .armour {
    font-size: 2.5rem;
  }
  .head {
    font-size: 4.5rem;
  }
  h6 {
    
 
      padding: 1rem 0rem;
      font-size: 1.5rem;
      span {
        display: block;
      }
      text-align: center;
    
  }
  h2 {
    font-size: 4rem;
    text-align: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
  h3 {
    font-size: 2rem;
    text-align: center;
    color: black;
    padding-bottom: 1rem;
  }
  h5 {
    font-size: 1.6rem;
    text-align: center;
    color: black;
    padding-bottom: 1rem;
    span {
      font-size: 2rem;
    }
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
    background-position: top center;
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
