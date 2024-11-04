import { React } from 'react';
//img icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from './useScroll';
import { scrollReveal } from './../animation';
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/js.png";
import react from "../img/Reactjs.png";
import next from "../img/next.svg";
import mysql from "../img/mysql.png";
import windows from "../img/windows.png";
import node from "../img/nodejs.png";
import web from "../img/web.jpg";
import aspnet from "../img/aspnet.png";
import Devops from "../img/Devops.png";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
      <Description>
        <Cards>
          <h2>High Main <span>Technical</span> Skills</h2>
          {[
            { src: html, title: 'HTML5' },
            { src: css, title: 'CSS' },
            { src: javascript, title: 'JavaScript' },
            { src: react, title: 'ReactJS' },
            { src: next, title: 'NextJS' },
            { src: mysql, title: 'MySQL' },
            { src: node, title: 'NodeJS' },
            { src: windows, title: 'System Administration' },
            { src: aspnet, title: 'ASP.NET' },
            { src: Devops, title: 'DevOps' },
          ].map(skill => (
            <Card key={skill.title}>
              <div className="icon">
                <img src={skill.src} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
            </Card>
          ))}
        </Cards>
      </Description>
      <Image>
        <img className="skill" src={web} alt="Web Development Skills" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjusts spacing */
  gap: 2rem; /* Space between cards */
  
  @media (max-width: 1300px) {
    justify-content: center; /* Center cards on smaller screens */
  }
`;

const Card = styled.div`
  flex: 1 1 200px; /* Allow cards to grow and shrink, with a minimum width */
  max-width: 20rem; /* Maximum width for larger screens */
  
  .icon {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1); /* Background for better visibility */
    border-radius: 10px; /* Rounded corners */
    
    img {
      height: 3.5rem;
    }
    
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 5px; /* Rounded corners for text */
    }
  }
`;

export default ServicesSection;