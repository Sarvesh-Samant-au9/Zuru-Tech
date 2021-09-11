import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Details = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const nameUpperCase = (userName) => {
    const name = userName.slice(0, 2).toUpperCase();
    return name;
  };
  const colors = ["#364F6B", "#3FC1C9", "#FC5185", "#000BBB"];

  return currentUser === null ? (
    <h3>No User Selected</h3>
  ) : (
    <div className="card">
      <h5 className="card-header">User Info</h5>
      <div className="card-body">
        <CircularHeading
          color={colors[Math.floor(Math.random() * colors.length)]}
        >
          {nameUpperCase(currentUser[0].name)}
        </CircularHeading>
        <h5 className="card-title text-center mt-2">{currentUser[0].name}</h5>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          Phone Number
          <i className="fas fa-phone-square-alt px-2"></i>
          <span className="text-primary px-3">{currentUser[0].contact}</span>
        </li>
        <li className="list-group-item">
          Email
          <i className="fas fa-envelope px-2"></i>
          <span className="text-primary px-3">{currentUser[0].company}</span>
        </li>

        <li className="list-group-item">
          Address
          <i className="fas fa-address-card px-2"></i>
          <span className="text-primary px-3">{currentUser[0].address}</span>
        </li>
        <li className="list-group-item">
          Company
          <i className="fas fa-building px-2"></i>
          <span className="text-primary px-3">{currentUser[0].company}</span>
        </li>
      </ul>
    </div>
  );
};
const CircularHeading = styled.div`
  width: 100px;
  height: 100px;
  color: #ffffff;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  font-size: 30px;
  border-radius: 50%;
  padding: 10px;

  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;

export default Details;
