import { React } from "react";
import styled from "styled-components";
import me from "../img/me.JPG"
import hassan from "../img/32842 (1).jpg";
import { Link } from "react-router-dom";
import Linking from "../img/icons8-link-90.png"
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

const Bank = () => {
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
        Information Technology Security Engineer
        </motion.h2>
        <motion.h2 class="armour" variants={Fade}>
          <a href="https://depi.gov.eg/">
                National Bank of Egypt{" "}
                
                </a>
        </motion.h2>
        <motion.h6>
        2024 April – Current
<span>Cairo Plaza Towers - Kournish El Nile, Giza, Egypt</span>
        </motion.h6>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <motion.h3>
          I've been hired as an 𝐈𝐓 𝐒𝐲𝐬𝐭𝐞𝐦 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 🔐👨‍💻 at the 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐁𝐚𝐧𝐤 𝐨𝐟 𝐄𝐠𝐲𝐩𝐭 (NBE) 🏦 🧑‍💼 , Specializing in 𝐏𝐀𝐌 (Privileged Access Management) Administration Framework.
        </motion.h3>
     
        <Hide>
          <motion.img variants={photoAnim} src={me} alt="athlete" />
        </Hide>
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
    a {
        font-size: 2.5rem;
        cursor: pointer;
        img {
            width: 1rem;
            height: 1rem;
        }
        :hover {
          text-shadow: 2px 2px 10px green;
        }
        :visited {
    color: inherit; /* or specify the color you want */
}
        text-decoration: none;
        outline: none;
      }
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
    a {
        font-size: 1.5rem;
        cursor: pointer;
        :hover {
          text-shadow: 2px 2px 10px white;
        }
      }
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

export default Bank;
