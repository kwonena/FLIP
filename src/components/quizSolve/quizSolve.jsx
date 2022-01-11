import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import styles from "./quizSolve.module.css";

// header에서 로그인 안 보이게
const QuizSolve = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.quizSetting}>
          <h1>퀴즈설정</h1>
          <span>어떤 문제를 풀어볼까요?</span>
          <div className={styles.quizBooks}>{/* <Books /> */}</div>
        </div>
        <div className={styles.quizSelect}>
          몇 문제를 풀어볼까요?
          <br />
          <select className={styles.quizSelectBox}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
          </select>
        </div>
        <button
          className={styles.quizStart}
          onClick={() => {
            navigate("/quiz");
          }}
        >
          시작!
        </button>
      </section>
    </>
  );
};

export default QuizSolve;
