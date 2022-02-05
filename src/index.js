import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import { getCookie } from "./cookie";
import WorkBooks from "./API/workbooks";
import Auth from "./API/auth";

const client = axios.create({
  baseURL: "http://54.180.103.35:3000/api/v1",
  headers: {
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
});

const clientAuth = axios.create({
  baseURL: "http://54.180.103.35:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const workBooks = new WorkBooks(client);
const auth = new Auth(clientAuth);

ReactDOM.render(
  <React.StrictMode>
    <App workBooks={workBooks} auth={auth} />
  </React.StrictMode>,
  document.getElementById("root")
);
