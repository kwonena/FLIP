import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import QuizBooks from "../quizBooks/quiz_books";
import styles from "./quizSolve.module.css";
import * as workbooks from "../../api/workbooks.js";

// header에서 로그인 안 보이게
const QuizSolve = () => {
  const [books, setBooks] = useState([]); // 화면에 보여지는 문제집
  const [nextBooks, setNextBooks] = useState([]); // 현재 보이는 다음 페이지 문제집
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const showBooks = (page) => {
    workbooks
      .showBooks(page) //
      .then((items) => {
        const quizBooks = items.map((item) => {
          return { ...item, selected: false };
        });
        setBooks(quizBooks);
      });
  };
  const hiddenBooks = (page) => {
    workbooks
      .showBooks(page + 1) //
      .then((items) => {
        setNextBooks(items);
      });
  };

  useEffect(() => {
    showBooks(1);
    hiddenBooks(1);
  }, []);

  const navigate = useNavigate();

  const [page, setPage] = useState(1); // 보여지는 문제집 페이징
  const [quizCnt, setQuizCnt] = useState(0); // 선택된 문제집 카드 개수
  const [quizBook, setQuizBook] = useState([]); // 사용자가 선택한 문제집
  const [randomBook, setRandomBook] = useState(); // 기존 문제집에서 랜덤 추출한 문제집

  //페이징 처리를 위한 함수
  const handleNext = () => {
    const nextPage = page + 1;
    hiddenBooks(nextPage);
    if (nextBooks.length === 0) {
      alert("다음 문제집이 없어요😅");
      setNextDisable(true);
    } else {
      showBooks(nextPage);
      setPage(nextPage);
      setPrevDisable(false);
    }
  };

  const handlePrev = () => {
    const prevPage = page - 1;
    hiddenBooks(prevPage);
    if (prevPage < 1) {
      alert("다음 문제집이 없어요😅");
      setPrevDisable(true);
    } else {
      showBooks(prevPage);
      setPage(prevPage);
      setNextDisable(false);
    }
  };

  //사용자가 문제집을 선택했을 때
  const selectBook = (book) => {
    setQuizCnt(book.cards.length);
    setQuizBook(book);
  };

  //랜덤 카드 문제집 만드는 함수
  //중복되지 않는 랜덤 index 설정
  const randomIdx = (num) => {
    const randomIdx = new Set();
    while (1) {
      if (randomIdx.size >= num) {
        return randomIdx;
      } else {
        let randomNum = Math.floor(Math.random() * quizCnt);
        randomIdx.add(randomNum);
      }
    }
  };

  const handleRandomQuiz = () => {
    const randomNum = selectRef.current.value;
    const random = [...randomIdx(randomNum)];
    const randomCards = random.map((idx) => {
      return { title: quizBook.title, cards: quizBook.cards[idx] };
    });
    setRandomBook(randomCards);
  };

  //선택된 문제집의 카드 개수만큼 option 설정
  const selectRef = useRef();
  const handleQuizNum = () => {
    const option = [];
    for (let i = 0; i <= quizCnt; i++) {
      option.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return option;
  };

  return (
    <>
      <Header login={true} />
      <section className={styles.container}>
        <div className={styles.quizSetting}>
          <h1
            onClick={() => {
              console.log(page, nextBooks);
            }}
          >
            퀴즈설정
          </h1>
          <span>어떤 문제를 풀어볼까요?</span>
          <div className={styles.quizBooks}>
            <QuizBooks
              books={books}
              setBooks={setBooks}
              prevDisable={prevDisable}
              nextDisable={nextDisable}
              handleNext={handleNext}
              handlePrev={handlePrev}
              selectBook={selectBook}
            />
          </div>
        </div>
        <div className={styles.quizSelect}>
          몇 문제를 풀어볼까요?
          <br />
          <select
            ref={selectRef}
            className={styles.quizSelectBox}
            onClick={handleRandomQuiz}
          >
            {handleQuizNum()}
          </select>
        </div>
        <div className={styles.quizStart}>
          <button
            className={styles.quizStartBtn}
            onClick={() =>
              randomBook && randomBook.length !== 0
                ? navigate("/quiz", {
                    state: {
                      quiz: randomBook,
                    },
                  })
                : alert("선택된 문제가 없어요😅")
            }
          >
            시작!
          </button>
        </div>
      </section>
    </>
  );
};

export default QuizSolve;
