import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import Auth from "./API/auth";

const clientAuth = axios.create({
  baseURL: "http://54.180.103.35:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = new Auth(clientAuth);

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>,
  document.getElementById("root")
);
