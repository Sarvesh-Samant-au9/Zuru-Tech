import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  userDetails,
  deleteUserDetails,
  setUser,
} from "../../Redux/Actions/userDetailsActionFunctions";

const ContactBrief = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetails());
  }, []);

  const data = useSelector((state) => state.user);
  console.log(data);

  const nameUpperCase = (userName) => {
    const name = userName.slice(0, 2).toUpperCase();
    return name;
  };
  const nameLenghtSetter = (name) => name.slice(0, 10);
  const colors = ["#364F6B", "#3FC1C9", "#FC5185", "#000BBB"];

  return data.isloading === true ? (
    <h3 className="text-danger">Wait fetching Data...</h3>
  ) : data.user === null ? (
    <h1>No Contacts Added</h1>
  ) : (
    <ul className="list-group">
      {data.user &&
        data.user.map(({ name, id }) => {
          return (
            <li className="list-group-item" key={id}>
              <ListStyled>
                <div>
                  <h5>
                    <CircularHeading
                      color={colors[Math.floor(Math.random() * colors.length)]}
                    >
                      {nameUpperCase(name)}
                    </CircularHeading>
                  </h5>
                  <h5>
                    {nameLenghtSetter(name)}
                    <i
                      className="fas fa-eye"
                      style={{ paddingLeft: "10px", color: "#5454d4" }}
                      onClick={() => dispatch(setUser(id))}
                    ></i>
                  </h5>
                </div>
                <IconContainer>
                  <Link
                    to="/edit"
                    style={{
                      textDecoration: "none",
                      padding: "4px",
                    }}
                  >
                    <i
                      className="fas fa-edit"
                      onClick={() => dispatch(setUser(id))}
                    ></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => dispatch(deleteUserDetails(id))}
                  ></i>
                </IconContainer>
              </ListStyled>
            </li>
          );
        })}
    </ul>
  );
};
const ListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div:nth-child(1) {
    display: flex;
    align-items: center;
    h5 {
      padding: 0 15px;
      @media screen and (max-width: 500px) {
        padding: 2px;
      }
      @media screen and (max-width: 420px) {
        padding: 5px;
        font-size: 14px;
      }
    }
  }
`;
const CircularHeading = styled.div`
  color: #ffffff;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 10px;

  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;
const IconContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    padding-left: 10px;
    @media screen and (max-width: 350px) {
      padding: 5px;
    }
    @media screen and (max-width: 350px) {
      padding: 5px;
      width: 100%;
    }
  }
`;
export default ContactBrief;
