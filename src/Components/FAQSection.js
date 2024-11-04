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
      // variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {/* <AnimateSharedLayout> */}
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <Toggle className="Row" title="My Education">
          <div className="answer">
            <p>
              🟢 I Hold a Bachelor's degree in <span>Software Engineering</span>{" "}
              from <a href="https://fcai.cu.edu.eg/">
                <span>Faculty of Computers & Artificial Intelligence 🌐 Cairo
              University</span>{" "}
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/external-flat-juicy-fish/60/external-link-contact-us-flat-flat-juicy-fish.png"
                  alt="external-link-contact-us-flat-flat-juicy-fish"
                />
              </a>
               , with an <span> Excellent Grade</span> in My Face Mask
              Detection Graduation Project 🎓, and a Cumulative GPA of{" "}
              <span>3.04</span>.
            </p>
            <div className="Date">
              <h5>
                2017 September – 2021 May <span>Giza, Egypt</span>
              </h5>
            </div>
          </div>

          <div className="answer">
            <p className="side">
              🟢 I Hold a Diploma in <span>.NET Backend Development</span>! 🌐👨‍💻
              from{" "}
              <a href="https://www.linkedin.com/company/routeacademy/mycompany/">
                <span>Route Academy</span>{" "}
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/external-flat-juicy-fish/60/external-link-contact-us-flat-flat-juicy-fish.png"
                  alt="external-link-contact-us-flat-flat-juicy-fish"
                />
              </a>
              <br />
              <span>•</span> Proficient in Database, Management using <span>SQL Server</span>, including
              Query writing, Data Manipulation, and <span>Database Design</span>.
              <br />
              <span>•</span> Skilled in both Basic and Advanced C# Programming and
              Object-Oriented Programming (<span>OOP</span>) principles.
              <br />
              <span>•</span> Extensive Experience with <span>Entity Framework</span> for Database
              Interaction, including Database-First and Code-First Approaches.
              <br />
              <span>•</span> Proficient in Developing Web Applications using <span>ASP.NET APIs</span>.
              <br />
              <span>•</span> Skilled in Designing and Implementing Web Applications using <span>MVC
              Architecture</span> .
              <br />
            </p>
            <div className="Date">
              <h5>
                2023 November – 2024 May <span>Cairo, Egypt</span>
              </h5>
            </div>

            
          </div>

          <div className="answer">
            <p className="side">
              🟢 <a href="https://depi.gov.eg/">
                <span>Digital Egypt Pioneers Initiative</span>{" "}
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/external-flat-juicy-fish/60/external-link-contact-us-flat-flat-juicy-fish.png"
                  alt="external-link-contact-us-flat-flat-juicy-fish"
                />
              </a> Scholarship provided By Ministry of Communications and Information Technology (MCIT) , Specializing in Software Development - <span>React Web Developer</span> Track! 🌐👨‍💻.
              <br />
              - Honored to Embark on this journey, Diving into a Comprehensive Curriculum
              <br />
          
              <span>•</span> Essential Web Development: <span>𝐇𝐓𝐌𝐋, 𝐂𝐒𝐒, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭</span>.
              <br />
              <span>•</span> Getting Started with <span>𝐆𝐢𝐭 and 𝐆𝐢𝐭𝐇𝐮𝐛</span>.
              <br />
              <span>•</span> Front-End Development with <span>𝐑𝐞𝐚𝐜𝐭</span>.
              <br />
              <span>•</span> Back-End Development with <span>𝐍𝐨𝐝𝐞.𝐣𝐬 and 𝐄𝐱𝐩𝐫𝐞𝐬𝐬</span>.
              <br />
              <span>•</span> <span>𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐏𝐫𝐨𝐣𝐞𝐜𝐭</span> using ReactJS & NodeJS.
              <br />
            </p>
            <div className="Date">
              <h5>
              Apr 2024 - Oct 2024 <span>Giza, Egypt</span>
              </h5>
            </div>

            
          </div>
        </Toggle>
        <Toggle title="My Military Service | Status">
          <div className="answer">
            <p>
              🟢 I was Nominated as a <span>Reserve Army Officer</span> 👮‍♀️ , So
              I Had to Attend to Faculty Of Reserve Officers , This Opportunity
              signifies the Recognition of My Exceptional Qualities and Skills
              that make me Well-Suited for a <span>Leadership</span> role, as
              well as My Commitment to <span>Work Ethic</span> and{" "}
              <span>Professionalism</span> within the Military 🛡️.
              <br />
              🟢 I've Had the Opportunity to work on{" "}
              <span>Egyptian Armed Forces</span> 🛡️, Completing My Military
              Service as a <span>Reserve Army Officer</span> 👮‍♀️, Specializing as
              a <span>Network Adminstrator | Full Stack Developer</span> 👨‍💻.
            </p>

            <div className="Date">
              <h5>
                2021 October – 2022 April
                <span>Ismailia, Egypt</span>
              </h5>
              <br />
              <br />
              <br />
              <h5>
                2022 April – 2023 October
                <span>Hikestep, Cairo, Egypt</span>
              </h5>
            </div>
          </div>
        </Toggle>
        <Toggle title="Soft Skills">
          <div className="answer">
            <p>
              🟢 Leadership
              <br />
              🟢 Communication & Collaboration
              <br />
              🟢 Self-Confidence & Presentation
              <br />
              🟢 Strong Work Ethic & Professional Skills
              <br />
              🟢 Creativity & Problem Solving
            </p>
          </div>
        </Toggle>
        <Toggle title="My Languages ?">
          <div className="answer">
            <p>
              🟢<strong> Arabic</strong> (Native or bilingual proficiency)
            </p>
            <p>
              🟢<strong> English</strong> (Professional Working Proficiency)
            </p>
          </div>
        </Toggle>
        <Toggle title="My Interests ?">
          <div className="answer">
            <p>🟢 WEIGHT LIFTING</p>
            <p>🟢 WORKING OUT</p>
          </div>
        </Toggle>
      {/* </AnimateSharedLayout> */}
    </FAQ>
  );
};

const FAQ = styled(About)`
  width: 100vw;
  display: block;

  span {
    display: inline-block;
  }

  h2 {
    padding-bottom: 0.2rem;
    font-weight: lighter;
  }

  h4 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 10px green;
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

  .Row {
    width: 100%;
    display: flex;
  }

  .answer {
    display: flex;
    @media (max-width: 1235px) { 
      display: flex;
      justify-content: center;
      align-items: center;

      p {
      padding: 1rem 0rem;
      width: 50%;

      a {
        font-size: 1.2rem;
        cursor: pointer;
        :hover {
          text-shadow: 2px 2px 10px white;
        }
      }
    }

    .Date {
      width: 20%;
      margin-left: 10%;
      padding: 1rem 0rem;
      font-size: 1rem;

      span {
        display: block;
      }
    }
    }
    .side {
      margin-right: 3rem;
    }

    p {
      padding: 2rem 0rem;
      width: 80%;

      a {
        font-size: 1.5rem;
        cursor: pointer;
        :hover {
          text-shadow: 2px 2px 10px white;
        }
      }
    }

    .Date {
      width: 20%;
      margin-left: 10%;
      padding: 2rem 0rem;
      font-size: 1.2rem;

      span {
        display: block;
      }
    }
  }

  /* Responsive styles for small screens */
  @media (max-width: 600px) {
    h2 {
      font-size: 1.8rem; /* Adjust heading size */
    }

    .Row {
      flex-direction: column; /* Stack items vertically */
    }

    .answer {
      flex-direction: column; /* Stack answer content */
      width: 100%; /* Full width on small screens */

      .side {
        margin-right: 0; /* Remove right margin */
        margin-bottom: 1rem; /* Add some space below */
      }

      p {
        width: 100%; /* Full width */
      }

      .Date {
        width: 100%; /* Full width for date */
        margin-left: 0; /* Remove left margin */
      }
    }
  }
`;

export default FAQSeaction;
