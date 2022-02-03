import React, { useEffect, useState } from "react";
import styles from "./addBook.module.css";
import Header from "../header/header";
import AddCard from "../addCard/addCard";
import Cards from "../cards/cards";
import { useLocation, useNavigate } from "react-router-dom";
import WorkBooks from "../../API/workbooks";

const AddBook = ({ inCards, showBooks }) => {
  const workBooks = new WorkBooks();
  const location = useLocation();
  const navigate = useNavigate();

  const { isCards, book, title, bookId } = location.state;

  const [cardInBook, setCardsInBook] = useState([]);
  const [popOpen, setPopOpen] = useState(false);
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    if (isCards) {
      showCards(bookId);
    } else {
      setCardsInBook([]);
    }
  }, [bookId]);

  const showCards = (bookId) => {
    workBooks
      .showCards(bookId) //
      .then((items) => {
        console.log(items);
        setCardsInBook(items);
      });
  };

  const addCard = (question, result, bookId) => {
    console.log("카드 추가");
    console.log(question, result, bookId);
    workBooks
      .addCard(question, result, bookId) //
      .then((response) => {
        console.log(response.statusCode);
        //setCardsInBook(items);
        console.log("카드 추가22");
        showCards(bookId);
      });
  };

  const updateCard = (card) => {
    workBooks
      .updateCard(card) //
      .then(() => {
        // <AddCard open={popOpen} />;
        showCards(bookId);
      });
  };

  const deleteCard = (id) => {
    workBooks
      .deleteCard(id) //
      .then(() => {
        showCards(bookId);
      });
  };

  const handleTitle = (event) => {
    setNewBook(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      createBook();
    }
  };

  const createBook = () => {
    workBooks
      .addBook(newBook) //
      .then(() => {
        showBooks(1);
        navigate("/");
      })
      .catch(() => {
        alert("제목은 공백일 수 없습니다.");
      });
  };

  const openPop = () => {
    setPopOpen(true);
  };

  const closePop = () => {
    setPopOpen(false);
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.addBook}>
          <section className={styles.titleContainer}>
            <div className={styles.titleBox}>
              {isCards ? (
                <span className={styles.title}>{title}</span>
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
              <span className={styles.text}>0개의 카드를 학습 중이에요.</span>
            ) : (
              <span className={styles.text}>문제집 제목을 입력해주세요.</span>
            )}

            <div className={styles.buttons}>
              <button className={styles.newBtn}>최신순</button>
              <button className={styles.starBtn}>즐겨찾기순</button>
            </div>
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
            title={title}
            bookId={bookId}
            showCards={showCards}
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
