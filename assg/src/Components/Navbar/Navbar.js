import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavBarContainer>
      <h3>Zuru Tech</h3>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  background: #5454d4;
  position: relative;
  z-index: 1;
  h3 {
    padding-left: 10px;
    font-family: sans-serif;
    color: #ffffff;
  }
`;
export default Navbar;
