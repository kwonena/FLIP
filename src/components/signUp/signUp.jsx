import React, { useRef, useState } from "react";
import styles from "./signUp.module.css";
import Header from "../header/header";
import Auth from "../../API/auth";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const auth = new Auth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();

  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");

  const onSignUp = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password_check = passwordCheckRef.current.value;

    event.preventDefault();
    setEmailMsg("");
    setPasswordMsg("");
    setPasswordCheckMsg("");

    if (password !== password_check) {
      setPasswordCheckMsg("비밀번호가 일치하지 않습니다.");
      console.log(passwordCheckMsg);
    } else {
      auth
        .signUp(email, password) //
        .then((response) => {
          console.log(response);
          alert("회원가입에 성공했습니다!");
          backToLogin();
        })
        .catch((error) => {
          setErrorMsg(error);
        });
    }
  };

  const setErrorMsg = (error) => {
    const data = error.response.data;
    switch (data.statusCode) {
      case 400:
        if (data.message.length === 2) {
          setEmailMsg("올바르지 못한 이메일 형식입니다.");
          setPasswordMsg(
            "비밀번호는 문자, 숫자, 특수문자를 포함한 최소 8자리여야 합니다."
          );
        } else {
          if (data.message[0] === "email must be an email") {
            setEmailMsg("올바르지 못한 이메일 형식입니다.");
          } else {
            setPasswordMsg(
              "비밀번호는 문자, 숫자, 특수문자를 포함한 최소 8자리여야 합니다."
            );
          }
        }
        break;
      case 409:
        setEmailMsg("이미 등록된 이메일입니다.");
        break;
    }
  };

  const backToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Header login={true} />
      <form className={styles.container} onSubmit={onSignUp}>
        <span className={styles.title}>SIGN UP</span>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input
              type="text"
              className={styles.input}
              placeholder="이메일"
              ref={emailRef}
              name="email"
            />
            <span className={styles.text}>{emailMsg}</span>
          </li>
          <li className={styles.item}>
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호"
              ref={passwordRef}
              name="password"
            />
            <span className={styles.text}>{passwordMsg}</span>
          </li>
          <li className={styles.item}>
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호 확인"
              ref={passwordCheckRef}
              name="passCheck"
            />
            <span className={styles.text}>{passwordCheckMsg}</span>
          </li>
        </ul>
        <button type="submit" className={styles.button}>
          가입하기
        </button>
      </form>
    </>
  );
};

export default SignUp;
