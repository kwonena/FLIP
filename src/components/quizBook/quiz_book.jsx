import React from 'react';
import styles from './quiz_book.module.css';

const QuizBook = ({ book, selectBook }) => {
    const setBook = () => {
        selectBook(book);
    };
    return (
        <>
            <li onClick={setBook} className={styles.item}>
                <div className={styles.bookTitle}>{book.title}</div>
                <div className={styles.bookCount}>
                    {book.cards.length}개의 카드
                </div>
            </li>
        </>
    );
};

export default QuizBook;
