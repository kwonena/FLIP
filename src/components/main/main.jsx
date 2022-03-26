import React from "react";
import { useNavigate } from "react-router-dom";
import Books from "../mainBooks/books";
import Header from "../header/header";
import styles from "./main.module.css";
import { useEffect } from "react";

const Main = ({
  page,
  setPage,
  showMoreBooks,
  setToken,
  setUser,
  books,
  deleteBook,
  user,
}) => {
  const navigate = useNavigate();
  const login = user ? true : false;

  // 무한 스크롤

  const getMoreBooks = () => {
    const next = page + 1;
    setPage(next);
    showMoreBooks();
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      getMoreBooks();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Header setToken={setToken} setUser={setUser} login={login} />
      <section className={styles.container}>
        <div className={styles.quiz}>
          <span className={styles.text}>
            안녕하세요! {user ? `${user}님` : ""}
          </span>
          <div className={styles.quizBox}>
            <span className={styles.quizText}>
              이제까지 정리한
              <br />
              지식을 검증해보고 싶다면?
            </span>
            <button
              className={styles.quizBtn}
              onClick={() => {
                if (!user) {
                  alert("로그인이 필요한 서비스입니다.");
                } else if (books.length === 0) {
                  alert("내 문제집이 없습니다!");
                } else {
                  navigate("/quizSolve");
                }
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
              onClick={() => {
                if (!user) {
                  alert("로그인이 필요한 서비스입니다.");
                } else {
                  navigate("/addBook", {
                    state: {
                      isCards: false,
                    },
                  });
                }
              }}
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
