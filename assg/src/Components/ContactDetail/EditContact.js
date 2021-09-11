import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editUser } from "../../Redux/Actions/userDetailsActionFunctions";
const EditContact = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(state);
  // console.log(currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const [stateValidation, setStateValidation] = useState({
    fields: {
      name: currentUser[0].name,
      email: currentUser[0].email,
      company: currentUser[0].company,
      address: currentUser[0].address,
      contact: currentUser[0].contact,
    },
    errors: {
      name: "",
      email: "",
      company: "",
      contact: "",
      address: "",
    },
  });
  // console.log(stateValidation);
  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email Cannot Be Empty";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "contact":
        if (!value || value.trim() === "") {
          return "Contact number is Required";
        } else if (
          !value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
        ) {
          return "Enter a valid contact number.";
        } else {
          return "";
        }
      case "address":
        if (!value || value.trim() === "") {
          return "Enter A Valid Address";
        } else {
          return "";
        }

      case "company":
        if (!value || value.trim() === "") {
          return "Company Name should not be blank";
        } else {
          return "";
        }

      default: {
        return "";
      }
    }
  };

  const onChangeHandler = (e) => {
    setStateValidation({
      errors: {
        ...stateValidation.errors,
        [e.target.name]: validate(e.target.name, e.target.value),
      },
      fields: {
        ...stateValidation.fields,
        [e.target.name]: e.target.value,
      },
    });
  };
  const { errors, fields } = stateValidation;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validationError = {};
    Object.keys(fields).forEach((name) => {
      const error = validate(name, fields[name]);
      // console.log(error);
      // console.log(validationError);
      if (error && error.length > 0) {
        validationError[name] = error;
      }
    });
    if (Object.keys(validationError).length > 0) {
      console.log(validationError);
      setStateValidation({ ...stateValidation, errors: validationError });
      return;
    }
    if (
      fields.name &&
      fields.email &&
      fields.company &&
      fields.address &&
      fields.contact
    ) {
      const data = {
        name: fields.name.toLowerCase(),
        email: fields.email,
        company: fields.company,
        contact: fields.contact,
        address: fields.address,
        id: currentUser[0].id,
      };
      console.log(data);
      console.log(dispatch(editUser(data)));
      dispatch(editUser(data));
      history.push("/");
    }
  };
  return (
    <div className="container mt-4">
      <h3 className="text-center text-primary">
        Edit User
        {currentUser[0].name}
      </h3>
      <form>
        <div className="form-group">
          <label htmlFor="inputNameUser">User Name</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            className="form-control"
            id="inputNameUser"
            placeholder="Enter User Name"
            onChange={(e) => onChangeHandler(e)}
          />

          <small id="nameHelp" className="form-text text-danger">
            {errors.name}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={(e) => onChangeHandler(e)}
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-danger">
            {errors.email}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="CompanyName">Company</label>
          <input
            type="text"
            className="form-control"
            id="CompanyName"
            aria-describedby="companyHelp"
            placeholder="Enter Company Name"
            value={fields.company}
            name="company"
            onChange={(e) => onChangeHandler(e)}
          />
          <small id="companyHelp" className="form-text text-danger">
            {errors.company}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            aria-describedby="contact"
            placeholder="Enter Your Contact Number"
            onChange={(e) => onChangeHandler(e)}
            value={fields.contact}
            name="contact"
          />
          <small id="contact" className="form-text text-danger">
            {errors.contact}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your Address"
            onChange={(e) => onChangeHandler(e)}
            value={fields.address}
            name="address"
          />
          <small className="form-text text-danger">{errors.address}</small>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={onSubmitHandler}
        >
          Edit the Form
        </button>
      </form>
    </div>
  );
};

export default EditContact;
