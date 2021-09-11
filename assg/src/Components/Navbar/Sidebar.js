import React from "react";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <div>
          <i className="fas fa-address-book"></i>
        </div>
        <div>
          <i className="fas fa-search"></i>
        </div>
        <div>
          <i className="fas fa-window-restore"></i>
        </div>
        <div>
          <i className="fab fa-airbnb"></i>
        </div>
        <div>
          <i className="fab fa-amazon-pay"></i>
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 50px;
  height: 100%;
  background: #810000;
  color: white;
  position: fixed;
  top: 0;
  div {
    margin-top: 7vh;
    display: flex;
    height: 50%;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-left: 4px solid transparent;
      cursor: pointer;
      transition: all ease-in 0.5s;
      &:hover {
        border-left: 4px solid white;
        cursor: pointer;
      }
    }
  }
`;
export default Sidebar;
