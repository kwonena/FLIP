import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

// header에서 로그인 안 보이게
const Login = (props) => {
  return (
    <>
      <Header />
      <section className={styles.login}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input
              type="text"
              className={styles.id}
              placeholder="아이디"
              name="id"
            />
            <input
              type="password"
              className={styles.password}
              placeholder="비밀번호"
              name="password"
            />
          </li>
          <li className={styles.item}>
            <button type="submit" className={styles.button}>
              로그인
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.sign}>회원가입</button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Login;
