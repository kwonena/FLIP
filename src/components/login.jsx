import React from "react";
import Header from "./header";

// header에서 로그인 안 보이게
const Login = (props) => {
  return (
    <section className="login">
      <Header />
      <section>
        <ul>
          <li>
            <button className="githubBtn">Github</button>
          </li>
          <li>
            <button className="googleBtn">Google</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
