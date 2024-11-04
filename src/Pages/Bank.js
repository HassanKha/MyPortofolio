import React from "react";
import styled from "styled-components";
import meImage from "../img/me.JPG";
import { motion } from "framer-motion";
import { pageAnimation, Fade } from "../animation";
import { useScroll } from "../Components/useScroll";
import ScrollTop from "./../Components/ScrollTop";

const Bank = () => {
  const [element, controls] = useScroll();

  return (
    <BankContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>Information Technology Security Engineer</Title>
        <Subtitle>
          National Bank of Egypt (NBE) <br />
          <small>Cairo Plaza Towers - Kournish El Nile · On-site</small>
        </Subtitle>
        <Position>
          <strong>2024 April – present <br/> Giza, Egypt</strong>
          <ul>
            <li>
              Specializing in IBM Security Verify Privilege Access Management
              (𝐏𝐀𝐌) to secure the Bank's Critical Systems and Sensitive Data by
              managing and controlling Privileged User Access.
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
                  • 𝐏𝐫𝐢𝐯𝐢𝐥𝐞𝐠𝐞𝐝 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭: Implement and maintain PAM
                  solutions for various IT systems, including Active Directory,
                  Oracle databases, SQL databases, and Unix systems.
                </Point>
                <Point>
                  • 𝐏𝐨𝐥𝐢𝐜𝐲 𝐄𝐧𝐟𝐨𝐫𝐜𝐞𝐦𝐞𝐧𝐭: Develop and enforce policies for
                  managing privileged accounts.
                </Point>
                <Point>
                  • 𝐓𝐡𝐫𝐞𝐚𝐭 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧: Monitor and respond to suspicious
                  activities involving privileged access.
                </Point>
                <Point>
                  • 𝐂𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 𝐚𝐧𝐝 𝐀𝐮𝐝𝐢𝐭𝐬: Ensure PAM practices comply with
                  industry standards and regulatory requirements, including
                  regular audits and reviews.
                </Point>
              </PointsList>
            </CardContent>
          </Card>
        </Details>
        <Image src={meImage} alt="Me" />
      </Content>
      <ScrollTop />
    </BankContainer>
  );
};

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

export default Bank;
