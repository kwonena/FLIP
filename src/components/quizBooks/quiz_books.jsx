import React from 'react';
import QuizBook from '../quizBook/quiz_book';
import styles from './quiz_books.module.css';

const QuizBooks = ({ books, page, handleNext, handlePrev }) => {
    return (
        <section className={styles.container}>
            {page !== 1 && (
                <button className={styles.prevBtn} onClick={handlePrev}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            )}

            <ul className={styles.list}>
                {books.map((book) => (
                    <QuizBook key={book.id} book={book} />
                ))}
            </ul>
            <button className={styles.nextBtn} onClick={handleNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </section>
    );
};

export default QuizBooks;
