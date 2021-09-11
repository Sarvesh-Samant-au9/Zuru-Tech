import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import AddContact from "./Components/ContactDetail/AddContact";
import EditContact from "./Components/ContactDetail/EditContact";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={AddContact} />
          <Route path="/edit" component={EditContact} />
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
