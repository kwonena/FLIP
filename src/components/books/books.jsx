import React from "react";
import Book from "../book/book";
import styles from "./books.module.css";

const Books = ({ books }) => {
  return (
    <>
      <ul className={styles.list}>
        {books.map((book) => (
          <Book book={book} />
        ))}
      </ul>
    </>
  );
};

export default Books;
