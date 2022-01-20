import React from 'react';
import styles from './quiz_book.module.css';

const QuizBook = ({ book }) => {
    return (
        <>
            <li className={styles.container}>
                <div className={styles.item}>
                    <section>
                        <div className={styles.bookTitle}>{book.title}</div>
                        <div className={styles.bookCount}>
                            {book.cards.length}개의 카드
                        </div>
                    </section>
                </div>
            </li>
        </>
    );
};

export default QuizBook;
