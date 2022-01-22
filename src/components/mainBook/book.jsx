import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./book.module.css";

const Book = ({ book, loadCards }) => {
  const navigate = useNavigate();

  return (
    <li
      className={styles.container}
      onClick={() => {
        console.log("book");
        navigate("/addBook", {
          state: {
            id: book.id,
            title: book.title,
            cards: book.cards,
          },
        });
      }}
    >
      <div className={styles.item}>
        <section>
          <div className={styles.bookTitle}>{book.title}</div>
          <div className={styles.bookCount}>{book.cards.length}개의 카드</div>
        </section>
        <footer className={styles.bookFooter}>
          <i>수정 </i>
          <i className={styles.bookDelete}>삭제</i>
        </footer>
      </div>
    </li>
  );
};

export default Book;
