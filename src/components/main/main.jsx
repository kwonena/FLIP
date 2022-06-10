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
  const userName = user?.split("@");

  // 무한 스크롤
  // page를 증가 시키며 showMoreBooks 호출
  const getMoreBooks = () => {
    const next = page + 1;
    setPage(next);
    showMoreBooks();
  };

  // 스크롤이 바닥을 감지하면 getMoreBooks 함수를 호출
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      getMoreBooks();
    }
  };

  // 스크롤 동작시 handleScroll 함수 호출
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
            {user
              ? `${userName[0]}님! FLIP과 함께 공부해볼까요?😉`
              : "안녕하세요! 로그인 해주세요:)"}
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
