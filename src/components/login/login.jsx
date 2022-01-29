import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from "../../API/clientService";
import Header from "../header/header";
import styles from "./login.module.css";

// header에서 로그인 안 보이게
const Login = (props) => {
  const clientService = new ClientService();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onLogin = () => {
    clientService
      .login(email, inputPw) //
      .then((data) => goToMain(data.user.email));
  };

  const goToMain = (email) => {
    navigate({
      pathname: "/main",
      state: { id: email },
    });
  };

  return (
    <>
      <Header />
      <section className={styles.login}>
        <spna className={styles.title}>LOGIN</spna>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input type="text" className={styles.email} placeholder="이메일" name="email" value={email} onChange={handleEmail} />
            <input type="password" className={styles.password} placeholder="비밀번호" name="password" value={inputPw} onChange={handleInputPw} />
          </li>
          <li className={styles.item}>
            <button type="submit" className={styles.button}>
              로그인
            </button>
          </li>
          <div className={styles.singUp}>
            <spna>아직 계정이 없으시다면?</spna>
            <button className={styles.sign} onClick={onLogin}>
              회원가입
            </button>
          </div>
        </ul>
      </section>
    </>
  );
};

export default Login;
