import React from 'react';
import Book from '../book/book';
import styles from './books.module.css';

const Books = ({ books, footerShow }) => {
    return (
        <>
            <ul className={styles.list}>
                {books.map((book) => (
                    <Book key={book.id} book={book} footerShow={footerShow} />
                ))}
            </ul>
        </>
    );
};

export default Books;
