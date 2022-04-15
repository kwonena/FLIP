import React, { useState, useEffect } from "react";
import styles from "./addBook.module.css";
import Header from "../header/header";
import AddCard from "../addCard/addCard";
import Cards from "../cards/cards";
import { useLocation, useNavigate } from "react-router-dom";
import * as workbooks from "../../API/workbooks.js";

const AddBook = ({ showBooks }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isCards, book } = location.state;

  const [cardInBook, setCardsInBook] = useState([]);
  const [popOpen, setPopOpen] = useState(false);
  const [newBook, setNewBook] = useState("");
  const [reverse, setReverse] = useState(true);

  // main에서 문제집 추가로 addBook에 접근하면 isCards는 false,
  // 이미 생성된 문제집의 수정 버튼으로 접근하면 isCards는 true
  // useEffect를 통해 isCards가 true일 때, 문제집에 포함된 카드를 보여줌
  useEffect(() => {
    if (isCards) {
      showCards(book.id, reverse);
    }
  });

  // 카드 로딩 함수
  const showCards = (id, reverse) => {
    workbooks
      .showCards(id, reverse) //
      .then((items) => {
        setCardsInBook(items);
      });
  };

  // 카드 추가 함수
  const addCard = (id, question, result) => {
    workbooks
      .addCard(id, question, result) // id == 문제집 id
      .then((data) => {
        if (reverse) {
          setCardsInBook(data.cards.reverse());
        } else {
          setCardsInBook(data.cards);
        }
      })
      .catch(() => {
        alert("모든 정보를 입력해주세요!");
        openPop();
      });
  };

  // 카드 업데이트 함수
  const updateCard = (id, question, result) => {
    workbooks
      .updateCard(id, question, result) // id == 카드 id
      .then(() => {
        showCards(book.id, reverse);
      })
      .catch(() => {
        alert("모든 정보를 입력해주세요!");
      });
  };

  // 카드 삭제 함수
  const deleteCard = (id) => {
    workbooks
      .deleteCard(id) // id == 카드 id
      .then(() => {
        showCards(book.id, reverse);
      });
  };

  // 카드 팝업 함수
  const openPop = () => {
    setPopOpen(true);
  };

  const closePop = () => {
    setPopOpen(false);
  };

  // 오래된순, 최신순으로 정렬
  const handleOldest = () => {
    setReverse(false);
  };

  const handleNewest = () => {
    setReverse(true);
  };

  // isCards가 false일 때, 함수 목록
  // 새로운 문제집 생성 함수
  const createBook = () => {
    workbooks
      .addBook(newBook) // api에 문제집 제목 전달
      .then(() => {
        showBooks(1);
        navigate("/");
      })
      .catch(() => {
        alert("제목은 공백일 수 없습니다.");
      });
  };

  // 문제집 제목을 저장하는 함수
  const handleTitle = (event) => {
    setNewBook(event.target.value);
  };

  // Enter key로 문제집 등록 가능하게 만듦
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      createBook();
    }
  };

  return (
    <>
      <Header login={true} />
      <section className={styles.container}>
        <section className={styles.addBook}>
          <section className={styles.titleContainer}>
            <div className={styles.titleBox}>
              {isCards ? (
                <span className={styles.title}>{book.title}</span>
              ) : (
                <input
                  onKeyPress={onKeyPress}
                  onChange={handleTitle}
                  type="text"
                  className={styles.title}
                  placeholder="문제집 제목"
                  name="title"
                />
              )}
            </div>
            {isCards ? (
              <span className={styles.text}>
                {book.cards.length}개의 카드를 학습 중이에요.
              </span>
            ) : (
              <span className={styles.text}>문제집 제목을 입력해주세요.</span>
            )}

            {isCards && (
              <div className={styles.buttons}>
                <button
                  className={
                    reverse
                      ? `${styles.sortBtn} ${styles.selectBtn}`
                      : styles.sortBtn
                  }
                  onClick={handleNewest}
                >
                  최신순
                </button>
                <button
                  className={
                    !reverse
                      ? `${styles.sortBtn} ${styles.selectBtn}`
                      : styles.sortBtn
                  }
                  onClick={handleOldest}
                >
                  오래된순
                </button>
              </div>
            )}
          </section>
          {isCards ? (
            <button className={styles.addCardBtn} onClick={openPop}>
              새로운 카드 추가하기
            </button>
          ) : (
            <button className={styles.addCardBtn} onClick={createBook}>
              새로운 문제집 추가하기
            </button>
          )}

          <AddCard
            open={popOpen}
            close={closePop}
            book={book}
            addCard={addCard}
          />
          {isCards && (
            <section className={styles.cardList}>
              <Cards
                cards={cardInBook}
                updateCard={updateCard}
                deleteCard={deleteCard}
              />
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default AddBook;
