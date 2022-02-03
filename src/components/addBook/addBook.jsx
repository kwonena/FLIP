import React, { useEffect, useState } from "react";
import styles from "./addBook.module.css";
import Header from "../header/header";
import AddCard from "../addCard/addCard";
import Cards from "../cards/cards";
import { useLocation, useNavigate } from "react-router-dom";
import WorkBooks from "../../API/workbooks";

const AddBook = ({ showBooks }) => {
  const workBooks = new WorkBooks();
  const location = useLocation();
  const navigate = useNavigate();

  const { isCards, book } = location.state;

  // console.log(isCards, book);

  const [cardInBook, setCardsInBook] = useState([]);
  const [popOpen, setPopOpen] = useState(false);
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    if (isCards) {
      showCards(book.id);
    } else {
      setCardsInBook([]);
    }
  }, []);

  const showCards = (id) => {
    workBooks
      .showCards(id) //
      .then((items) => {
        setCardsInBook(items);
      });
  };

  const addCard = (question, result, bookId) => {
    workBooks
      .addCard(question, result, bookId) //
      .then((data) => {
        setCardsInBook(data.cards);
      })
      .catch(() => {
        alert("모든 정보를 입력해주세요!");
        openPop();
      });
  };

  const updateCard = (id, question, result) => {
    workBooks
      .updateCard(id, question, result) //
      .then(() => {
        showCards(book.id);
      })
      .catch(() => {
        alert("모든 정보를 입력해주세요!");
      });
  };

  const deleteCard = (id) => {
    workBooks
      .deleteCard(id) //
      .then(() => {
        showCards(book.id);
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
                {book.cards.lenght}개의 카드를 학습 중이에요.
              </span>
            ) : (
              <span className={styles.text}>문제집 제목을 입력해주세요.</span>
            )}

            <div className={styles.buttons}>
              <button className={styles.newBtn}>오래된순</button>
              <button className={styles.starBtn}>최신순</button>
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
            addCard={addCard}
            showCards={showCards}
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
