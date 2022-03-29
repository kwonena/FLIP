import axios from "axios";

const auth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const logIn = (email, password) => {
  const response = auth.post("auth/login", {
    email: email,
    password: password,
  });
  return response;
};

export const signUp = (email, password) => {
  const response = auth.post("auth/signup", {
    email: email,
    password: password,
  });
  return response;
};
