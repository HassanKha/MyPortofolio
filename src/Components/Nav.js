import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          HK
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>
        <li
        //  onMouseEnter={toggleDropdown}
        //  onMouseLeave={toggleDropdown}
         onClick={toggleDropdown}
        >
          <h7>My Work Experience</h7>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
          {dropdownOpen && (
            <DropdownMenu
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
                <DropdownItem>
                <Link to="/frontend">My Frontend Experience</Link>
              </DropdownItem>
                <DropdownItem>
                <Link to="/bank">My Bank Experience</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/work">My Military Experience</Link>
              </DropdownItem>
           
             
            </DropdownMenu>
          )}
        </li>
        <li>
          <Link to="/contact">Contact me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  position: sticky;
  top: 0%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  h7{
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
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

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top :  160%;
  left: 50%;
  background: #282828;
  border: 1px solid #23d997;
  padding: 0.5rem 1rem;
  z-index: 10;
`;

const DropdownItem = styled.div`
  margin: 0.5rem 0;
  width: 12rem;
  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    &:hover {
      color: #23d997;
    }
  }
`;
export default Nav;
