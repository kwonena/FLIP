import React from "react";
import Header from "../header/header";
import styles from "./main.module.css";

//import styles from "./main.module.css";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.quiz}>
          <span className={styles.text}>안녕하세요! 마스외전님</span>
          <div className={styles.quizBox}>
            <span>
              이제까지 정리한
              <br />
              지식을 검증해보고 싶다면?
            </span>
            <button className={styles.button}>퀴즈 풀러 가기</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
