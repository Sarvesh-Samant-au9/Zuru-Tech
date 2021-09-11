import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";
import ContactBrief from "./Components/Contacts/ContactBrief";
import Details from "./Components/ContactDetail/Details";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchUser } from "./Redux/Actions/userDetailsActionFunctions";
import { useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const text = useRef("");
  const onChange = (e) => {
    dispatch(searchUser(text.current.value));
  };
  return (
    <div className="container-fluid App">
      <Navbar />
      <Sidebar />
      <div
        className="row"
        style={{
          paddingLeft: "50px",
        }}
      >
        <div className="col-12 mx-auto mt-3">
          <div className="col-10 form-inline">
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search Users"
                onChange={onChange}
                ref={text}
              />
            </form>
            <Link to="/add" className="btn btn-outline-primary ml-3">
              Add Contact
            </Link>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          paddingLeft: "50px",
        }}
      >
        <div className="col-md-8 col-12 mx-auto mt-3">
          <ContactBrief />
        </div>
        <div className="col-md-4 col-12 mx-auto mt-3">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
