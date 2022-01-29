import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import WorkBooks from "./API/workbooks";

const httpClient = axios.create({
  baseURL: "http://54.180.103.35:3000/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQzMTIyNzg5LCJleHAiOjE2NDM3Mjc1ODl9.s6Hu-TP12Ewo3eSEpQ0Hrd0tD-wB8R9AZmb--kVTtX8",
  },
});

const workBooks = new WorkBooks(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App workBooks={workBooks} />
  </React.StrictMode>,
  document.getElementById("root")
);
