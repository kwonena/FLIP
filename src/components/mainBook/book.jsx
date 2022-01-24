import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./book.module.css";

const Book = ({ book, loadCards, onDelete }) => {
  const navigate = useNavigate();
  const deleteCard = () => {
    onDelete(book);
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
            <i class="fas fa-edit fa-2x"></i>
          </button>
          <button className={styles.bookDelete} onClick={deleteCard}>
            <i class="fas fa-trash-alt fa-2x"></i>
          </button>
        </footer>
      </div>
    </li>
  );
};

export default Book;
