import React, { useRef } from "react";
import styles from "./signUp.module.css";
import Header from "../header/header";

const SignUp = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passCheckRef = useRef();

  const onSubmit = () => {
    if (onChange() === true) {
      if (passwordRef.current.value !== passCheckRef.current.value) {
        alert("비밀번호를 다시 입력주세요");
      } else alert("가입 되었습니다.");
    } else {
      if (emailRef.current.value === "") {
        alert("이메일를 입력해주세요");
      } else if (passwordRef.current.value === "") {
        alert("비밀번호를 입력해주세요");
      } else if (passCheckRef.current.value === "") {
        alert("비밀번호 확인을 입력해주세요");
      }
    }
  };

  const onChange = () => {
    if (emailRef.current.value === "") {
      return false;
    } else if (passwordRef.current.value === "") {
      return false;
    } else if (passCheckRef.current.value === "") {
      return false;
    } else return true;
  };
  return (
    <>
      <Header />
      <section className={styles.container}>
        <span className={styles.title}>SIGN UP</span>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input type="text" className={styles.input} placeholder="이메일" ref={emailRef} name="email" onChange={onChange} />
            <input type="password" className={styles.input} placeholder="비밀번호" ref={passwordRef} name="password" onChange={onChange} />
            <input type="password" className={styles.input} placeholder="비밀번호 확인" ref={passCheckRef} name="passCheck" onChange={onChange} />
          </li>
          <li className={styles.item}>
            <button type="submit" className={styles.button} onClick={onSubmit}>
              가입하기
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SignUp;
