import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, TitleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "./../Components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={TitleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>01118877375</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>HassanKhaled4432@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>
              <a href="https://www.linkedin.com/in/hassan-khaled-6891531b6/">
                LinkedIn
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>
              <a href="https://www.instagram.com/hassan.khaled.94">Instagram</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <h2>
              <a href="https://github.com/HassanKha">GitHub</a>
            </h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 1.5rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1.9rem;
    font-size: 3.8rem;
    font-weight: bold;
    :hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  }
  h2 a {
    text-decoration: none;
    color: #353535;
    font-size: 4rem;
    cursor: pointer;
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default ContactUs;
