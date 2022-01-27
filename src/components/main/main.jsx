import React from "react";
import { useNavigate } from "react-router-dom";
import Books from "../mainBooks/books";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ books, deleteBook }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.quiz}>
          <span className={styles.text}>안녕하세요! 마스외전님</span>
          <div className={styles.quizBox}>
            <span className={styles.quizText}>
              이제까지 정리한
              <br />
              지식을 검증해보고 싶다면?
            </span>
            <button
              className={styles.quizBtn}
              onClick={() => {
                navigate("/quizSolve");
              }}
            >
              퀴즈 풀러 가기
            </button>
          </div>
        </div>
        <div className={styles.study}>
          <div className={styles.studyBox}>
            <span className={styles.studyText}>학습 중</span>
            <button
              className={styles.studyBtn}
              onClick={() =>
                navigate("/addBook", {
                  state: {
                    isCards: false,
                  },
                })
              }
            >
              문제집 추가
            </button>
          </div>
          <div className={styles.books}>
            <Books books={books} deleteBook={deleteBook} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
