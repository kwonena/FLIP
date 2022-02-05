import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./book.module.css";

const Book = ({ book, deleteBook }) => {
  const navigate = useNavigate();

  const onDeleteBook = () => {
    deleteBook(book.id);
  };

  return (
    <li className={styles.container}>
      <div className={styles.item}>
        <section>
          <div className={styles.bookTitle}>{book.title}</div>
          <div className={styles.bookCount}>{book.cards.length}개의 카드</div>
        </section>
        <footer className={styles.bookFooter}>
          <button
            className={styles.bookEdit}
            onClick={() => {
              navigate("/addBook", {
                state: {
                  isCards: true,
                  book: book,
                },
              });
            }}
          >
            <i className="fas fa-edit fa-2x"></i>
          </button>
          <button className={styles.bookDelete} onClick={onDeleteBook}>
            <i className="fas fa-trash-alt fa-2x"></i>
          </button>
        </footer>
      </div>
    </li>
  );
};

export default Book;
