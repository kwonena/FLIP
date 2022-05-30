import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setCookie } from "../../cookie";
import Header from "../header/header";
import styles from "./login.module.css";
import * as auth from "../../API/auth.js";

// header에서 로그인 안 보이게
const Login = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();

    auth
      .logIn(email, password) //
      .then((response) => {
        console.log(response);
        backToMain(response.data.data.accessToken);
      })
      .catch((error) => {
        // eslint-disable-next-line default-case
        switch (error.response.status) {
          case 401:
            alert("비밀번호를 확인해주세요");
            break;
          case 404:
            alert("이메일을 확인해주세요");
            break;
          case 400:
            alert("입력된 정보를 확인해주세요");
            break;
        }
      });
  };

  const backToMain = (token) => {
    setCookie("accessToken", token, {
      path: "/",
    });
    setCookie("userEmail", email, {
      path: "/",
    });
    window.location.replace("/");
    setToken(token);
    setUser(email);
  };

  return (
    <>
      <Header login={false} />
      <section className={styles.login}>
        <section className={styles.loginBox}>
          <span className={styles.title}>LOGIN</span>
          <form className={styles.list} onSubmit={onLogin}>
            <input
              type="text"
              className={styles.email}
              placeholder="이메일"
              onChange={handleEmail}
            />
            <input
              type="password"
              className={styles.password}
              placeholder="비밀번호"
              onChange={handlePassword}
            />
            <button type="submit" className={styles.button}>
              로그인
            </button>

            <div className={styles.singUp}>
              <span>아직 계정이 없으시다면?</span>

              <Link to="/signUp">
                <button className={styles.sign}>회원가입</button>
              </Link>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
