import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  .title {
    .name {
      font-size: 4.2rem;
    }
    .dreams {
      font-size: 2.5rem;
    }
    .true {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  button {
    margin-left: 1rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  opacity: 0.9;
 
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 1.5);
  }
  .skill {
    height: 70vh;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
