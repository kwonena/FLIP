import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  logIn(email, password) {
    const response = this.auth.post("auth/login", {
      email: email,
      password: password,
    });
    return response;
  }

  logOut() {
    const response = this.auth.post("auth/logout");
    return response;
  }

  signUp(email, password) {
    const response = this.auth.post("auth/signup", {
      email: email,
      password: password,
    });
    return response;
  }
}

export default Auth;
