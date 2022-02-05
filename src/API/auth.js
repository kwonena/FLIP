class Auth {
  constructor(clientAuth) {
    this.auth = clientAuth;
  }

  logIn(email, password) {
    const response = this.auth.post("auth/login", {
      email: email,
      password: password,
    });
    return response;
  }

  // logOut() {
  //   const response = this.auth.post("auth/logout");
  //   return response;
  // }

  signUp(email, password) {
    const response = this.auth.post("auth/signup", {
      email: email,
      password: password,
    });
    return response;
  }
}

export default Auth;
