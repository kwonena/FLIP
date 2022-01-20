import React from 'react';
import QuizBook from '../quizBook/quiz_book';
import styles from './quiz_books.module.css';

const QuizBooks = ({ books }) => {
    return (
        <>
            <ul className={styles.list}>
                {books.map((book) => (
                    <QuizBook key={book.id} book={book} />
                ))}
            </ul>
        </>
    );
};

export default QuizBooks;
