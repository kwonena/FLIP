import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Books from "../books/books";
import Header from "../header/header";
import styles from "./main.module.css";
import axios from "axios";

const Main = (props) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "첫번째 문제집",
      cards: "0",
    },
    {
      id: "2",
      title: "두번째 문제집",
      cards: "0",
    },
    {
      id: "2",
      title: "두번째 문제집",
      cards: "0",
    },
    {
      id: "2",
      title: "두번째 문제집",
      cards: "0",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://54.180.103.35:3000/api/v1/workbooks?page=1&limit=10")
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
                setBooks(...books);
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
              onClick={() => navigate("/addBook")}
            >
              문제집 추가
            </button>
          </div>
          <div className={styles.books}>
            <Books books={books} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
