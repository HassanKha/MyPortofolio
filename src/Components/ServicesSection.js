import { React } from 'react';
//img icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import {About , Description , Image} from "../styles"
import styled from "styled-components";
import { useScroll } from './useScroll';
import { scrollReveal } from './../animation';
import html from "../img/html.png"
import css from "../img/css.png"
import javascript from "../img/js.png"
import react from "../img/Reactjs.png"
import next from "../img/next.svg"
import mysql from "../img/mysql.png"
import windows from "../img/windows.png"
import node from "../img/nodejs.png"
import web from "../img/web.jpg"
import aspnet from "../img/aspnet.png"
import Devops from "../img/Devops.png"
const ServicesSection = () => {

const [element , controls] = useScroll();

return (
<Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>

    <Description>

        <Cards>
   <h2>High Main <span>Technical</span> Skills</h2>
            <Card>
                <div className="icon">
        <img  src={html}  alt="clock"
        />
        <h3>HTML5</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={css} alt="teamwork" />
        <h3>CSS</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={javascript} alt="diaphragm" />
        <h3>JavaScript</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={react} alt="" />
        <h3>ReactJS</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={next} alt="" />
        <h3>NextJS</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={mysql} alt="" />
        <h3>MySQL</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={node} alt="" />
        <h3>NodeJS</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={windows} alt="" />
        <h3>System Adminstration</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={aspnet} alt="" />
        <h3>ASP.NET</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
            <Card>
                <div className="icon">
        <img  src={Devops} alt="" />
        <h3>DevOps</h3>
                </div>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </Card>
        </Cards>
    </Description>
    <Image>
    <img class="skill" src={web} alt=""/>
    </Image>
</Services>

)

}

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`
const Cards = styled.div`
display: flex ;
flex-wrap: wrap;
@media (max-width: 1300px) {
    justify-content: center;
  }
`

const Card = styled.div`
flex-basis: 20rem;

.icon {
    display: flex;
    align-items: center;
    padding : 0.5rem;
img {
    height: 3.5rem;
}
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}


`


export default ServicesSection;