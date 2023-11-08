import { React } from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "./../animation";

const FAQSeaction = () => {
  const [element, controls] = useScroll();

  return (
    <FAQ
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <AnimateSharedLayout>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <Toggle title="Info about My Education ?">
          <div className="answer">
            <p>
              I Hold a Bachelor's degree in Software Engineering from Faculty of
              Computers & Artificial Intelligence Cairo University, with an
              Excellent Grade in My Face Mask Detection Graduation Project, and
              a Cumulative GPA of 3.04.
            </p>
          </div>
        </Toggle>
        <Toggle title="My Military Status">
          <div className="answer">
            <p>Completed as Reserve Army Officer.</p>
            <p>
              I was Nominated as a Reserve Army Officer , So I Had to Attend to
              Faculty Of Reserve Officers , This Opportunity signifies the
              Recognition of My Exceptional Qualities and Skills that make me
              Well-Suited for a Leadership role, as well as My Commitment to
              Work Ethic and Professionalism within the Military.
            </p>
            <p>
              from 1th October 2021 to 1th April 2022 as a Student in The
              Faculty of Reserved Officers.
            </p>
            <p>from 1th April 2022 to 1th December 2022 as a Lieutenant</p>
            <p>
              from 1th December 2022 to 1th October 2023 as a First Lieutenant
            </p>
          </div>
        </Toggle>
        <Toggle title="Any Soft Skills ?">
          <div className="answer">
            <p>Leadership</p>
            <p>Communication & Collaboration</p>
            <p>Self-Confidence & Presentation</p>
            <p>Strong Work Ethic & Professional Skills</p>
            <p>Creativity & Problem Solving</p>
          </div>
        </Toggle>
        <Toggle title="My Languages ?">
          <div className="answer">
            <p>Arabic (Native or bilingual proficiency)</p>
            <p>English (Limited working proficiency)</p>
          </div>
        </Toggle>
        <Toggle title="My Interests ?">
          <div className="answer">
            <p>WEIGHT LIFTING</p>
            <p>WORKING OUT</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 0.2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .Question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;

    p {
      padding: 0.4rem 0rem;
    }
  }
`;

export default FAQSeaction;
