import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../API/auth";
import { setCookie } from "../../cookie";
import Header from "../header/header";
import styles from "./login.module.css";

// header에서 로그인 안 보이게
const Login = ({ setToken, setUser }) => {
  const auth = new Auth();
  const navigate = useNavigate();

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
        backToMain(response.data.accessToken);
      })
      .catch((error) => {
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
    navigate("/");
    setToken(token);
    setUser(email);
  };

  return (
    <>
      <Header login={false} />
      <section className={styles.login}>
        <span className={styles.title}>LOGIN</span>
        <form className={styles.list} onSubmit={onLogin}>
          <input
            // ref={emailRef}
            type="text"
            className={styles.email}
            placeholder="이메일"
            onChange={handleEmail}
          />
          <input
            // ref={passwordRef}
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
    </>
  );
};

export default Login;
