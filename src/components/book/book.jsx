import React from 'react';
import styles from './book.module.css';

const Book = ({ book, footerShow }) => {
    const display = footerShow ? styles.show : styles.hidden;
    return (
        <li className={styles.item}>
            <section>
                <div className={styles.bookTitle}>{book.title}</div>
                <div className={styles.bookCount}>
                    {book.cards.length}개의 카드
                </div>
            </section>
            <footer className={`${styles.bookFooter} ${display}`}>
                <i>수정 </i>
                <i className={styles.bookDelete}>삭제</i>
            </footer>
        </li>
    );
};

export default Book;
