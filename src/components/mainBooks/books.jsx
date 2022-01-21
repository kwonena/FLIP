import React from "react";
import Book from "../mainBook/book";
import styles from "./books.module.css";

const Books = ({ books, loadCards }) => {
  return (
    <>
      <ul className={styles.list}>
        {books.map((book) => (
          <Book key={book.id} book={book} loadCards={loadCards} />
        ))}
      </ul>
    </>
  );
};

export default Books;
