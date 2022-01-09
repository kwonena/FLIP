import React from "react";
import styles from "./book.module.css";

const Book = ({ book }) => {
  console.log(book);
  return (
    <li className={styles.item}>
      <section>
        <div className={styles.bookTitle}>8</div>
        <div className={styles.bookCount}>0개의 카드</div>
      </section>
      <footer className={styles.bookFooter}>
        <i>수정 </i>
        <i className={styles.bookDelete}>삭제</i>
      </footer>
    </li>
  );
};

export default Book;
