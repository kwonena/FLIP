import React from "react";
import QuizBook from "../quizBook/quiz_book";
import styles from "./quiz_books.module.css";

const QuizBooks = ({
  books,
  setBooks,
  prevDisable,
  nextDisable,
  handleNext,
  handlePrev,
  selectBook,
}) => {
  const clickedBook = (book) => {
    const showBooks = books.map((item) => {
      if (item.id === book.id) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setBooks(showBooks);
  };

  return (
    <section className={styles.container}>
      <button
        disabled={prevDisable}
        className={!prevDisable ? styles.prevBtn : styles.disablePrevBtn}
        onClick={handlePrev}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <ul className={styles.list}>
        {books.map((book) => (
          <QuizBook
            key={book.id}
            book={book}
            selected={book.selected}
            selectBook={selectBook}
            clickedBook={clickedBook}
          />
        ))}
      </ul>
      <button
        disabled={nextDisable}
        className={!nextDisable ? styles.nextBtn : styles.disableNextBtn}
        onClick={handleNext}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default QuizBooks;
