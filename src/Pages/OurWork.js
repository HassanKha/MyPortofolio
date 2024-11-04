import React from "react";
import styled from "styled-components";
import hassan2 from "../img/hassan2.JPG";
import hassan3 from "../img/hassan5.JPG";
import hassan4 from "../img/hassan4.JPG";
import hassan from "../img/32842 (1).jpg";
import { motion } from "framer-motion";
import { pageAnimation, Fade, LineAnim } from "../animation";
import { useScroll } from "../Components/useScroll";
import ScrollTop from "./../Components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>Information Technology Army Officer</Title>
        <Subtitle>
          Egyptian Armed Forces | The Main Armor 101 Workshop <br />
          <small>Hikestep, Cairo, Egypt (April 2022 - October 2023)</small>
        </Subtitle>
        <Position>
          <strong>Positions Held:</strong>
          <ul>
            <li>Lieutenant ⭐ from (1st April 2022) to (1st December 2022)</li>
            <li>First Lieutenant ⭐⭐ from (1st December 2022) to (1st October 2023)</li>
          </ul>
        </Position>
      </Header>
      <Content>
   

        <Details>
          <Card ref={element} variants={Fade} animate={controls} initial="hidden">
            <CardContent>
              <PointsList>
                <Point>
                  🟢 Led a Team of 3-4 Soldiers and 1-2 Non-Commissioned Officers in the IT Department, Overseeing the Development and Maintenance of an Internal Private Website as a <Highlight>Full Stack Developer</Highlight>.
                </Point>
                <Point>
                  🟢 Managed the <Highlight>Server Manager of a LAN network and Clients</Highlight>, providing Technical Support and Troubleshooting issues with Hardware and Software.
                </Point>
                <Point>
                  🟢 Responsible for the Installation, Configuration, and Maintenance of Server Infrastructure, Including <Highlight>Active Directory</Highlight> Services, Managing <Highlight>User Accounts</Highlight>, <Highlight>Security Permissions</Highlight>, <Highlight>Group Policies</Highlight>, and other Network-Related Tasks as a <Highlight>Network Administrator</Highlight>.
                </Point>
                <Point>
                  🟢 Successfully Solved Complex Database Query Problems as <Highlight>Technical Application Support</Highlight> in Server Manager <Highlight>SQL</Highlight>.
                </Point>
                <Point>
                  🟢 Implemented an Auto <Highlight>Backup</Highlight> for <Highlight>Database</Highlight> and for the Network, ensuring Regular Backups of Critical data and Establishing Procedures for System Failures or Data Loss.
                </Point>
              </PointsList>
            </CardContent>
          </Card>

        </Details>
        <ImageGallery>
          <GalleryImage src={hassan} alt="Army Officer" />
          <GalleryImage src={hassan3} alt="Project Image" />
          <GalleryImage src={hassan4} alt="Technical Support" />
          <GalleryImage src={hassan2} alt="Network Admin Work" />
        </ImageGallery>
      </Content>
      <ScrollTop />
    </Work>
  );
};

// Styled Components
const Work = styled(motion.div)`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin-bottom: 3rem;
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 1200px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1440px) {
    height: 250px;
  }
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

const Highlight = styled.span`
  font-weight: bold;
  color: #23d997;
`;

export default OurWork;