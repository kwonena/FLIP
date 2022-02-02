import axios from "axios";

class Authorization {
  constructor() {
    this.authorization = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  logIn(email, password) {
    const response = this.authorization.post("auth/login", {
      email: email,
      password: password,
    });
    return response;
  }

  signUp(email, password) {
    const response = this.authorization.post("auth/signup", {
      email: email,
      password: password,
    });
    return response;
  }
}

export default Authorization;
