import React from "react";
import styled from "styled-components";
import meImage from "../img/me.JPG";
import meVideo from "../img/Calendar.mov";
import { motion } from "framer-motion";
import { pageAnimation, Fade } from "../animation";
import { useScroll } from "../Components/useScroll";
import ScrollTop from "./../Components/ScrollTop";

const Frontend = () => {
  const [element, controls] = useScroll();

  return (
    <BankContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>React Frontend Developer</Title>
        <Subtitle>
          VODO <br />
          <small>Riyadh, Saudi Arabia · Remote (Part Time)</small>
        </Subtitle>
        <Position>
        <strong>2024 May – 2024 November <br/> Riyadh, Saudi Arabia</strong>
          <ul>
            <li>
              I had the opportunity to work with cutting-edge technologies and
              expand my skill set. I gained hands-on experience with 𝐑𝐞𝐚𝐜𝐭,
              including its application in 𝐦𝐢𝐜𝐫𝐨𝐟𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐚𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞𝐬.
              Additionally, I worked extensively with the React Calendar
              library, customizing it to meet specific project needs.
            </li>
          </ul>
        </Position>
      </Header>
      <Content>
        <Details
          ref={element}
          variants={Fade}
          animate={controls}
          initial="hidden"
        >
          <Card>
            <CardContent>
              <PointsList>
                <Point>
                  • Completed a Frontend React Developer Internship,
                  collaborating on Projects, working with APIs, GitHub, and
                  using Microfrontend architecture in React.js.
                </Point>
                <Point>
                  • Hired Part-time Remotely to optimize the Frontend and
                  Improve User Experience.
                </Point>
              </PointsList>
            </CardContent>
          </Card>
        </Details>
        <Video src={meVideo} controls autoPlay loop muted /> {/* Replace the Image component with this Video component */}
{/* 
        <Image src={meImage} alt="Me" /> */}
      </Content>
      <ScrollTop />
    </BankContainer>
  );
};

const Video = styled.video`
  width: 100%;
  height: auto; /* This keeps the aspect ratio */
  max-height: 400px; /* Set a max height */
  object-fit: cover; /* This makes the video cover the area */
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Position = styled.div`
  font-size: 1.1rem;
  color: #444;
  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

// Styled Components
const BankContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 2rem;
  background: #f0f0f0;
  @media (min-width: 768px) {
    padding: 3rem;
  }
  @media (min-width: 1024px) {
    padding: 5rem 10rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* This keeps the aspect ratio */
  max-height: 400px; /* Set a max height */
  object-fit: cover; /* This makes the image cover the area */
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1900px;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const PointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Point = styled.li`
  font-size: 1.1rem;
  color: #333;
  text-align: left;
  padding: 1rem;
  border-left: 5px solid #23d997;
  background: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
  }
`;

export default Frontend;
