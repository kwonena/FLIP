import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

// header에서 로그인 안 보이게
const Login = (props) => {
  return (
    <>
      <Header />
      <section className={styles.login}>
        <section>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.githubBtn}>Github로 로그인</button>
            </li>
            <li className={styles.item}>
              <button className={styles.googleBtn}>Google로 로그인</button>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Login;
