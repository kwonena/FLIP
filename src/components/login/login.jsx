import React, { useState } from "react";
import Header from "../header/header";
import styles from "./login.module.css";

// header에서 로그인 안 보이게
const Login = (props) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // const onLogin = () => {
  //   authLogin
  //     .login(inputId, inputPw) //
  //     .then((res) => {
  //       console.log(res);
  //       if (res.resultcode === 1) {
  //         navigate("");
  //       }
  //     });
  // };

  return (
    <>
      <Header />
      <section className={styles.login}>
        <spna className={styles.title}>LOGIN</spna>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input
              type="text"
              className={styles.id}
              placeholder="아이디"
              name="id"
              value={inputId}
              onChange={handleInputId}
            />
            <input
              type="password"
              className={styles.password}
              placeholder="비밀번호"
              name="password"
              value={inputPw}
              onChange={handleInputPw}
            />
          </li>
          <li className={styles.item}>
            <button type="submit" className={styles.button}>
              로그인
            </button>
          </li>
          <div className={styles.singUp}>
            <spna>아직 계정이 없으시다면?</spna>
            <button className={styles.sign}>회원가입</button>
          </div>
        </ul>
      </section>
    </>
  );
};

export default Login;
