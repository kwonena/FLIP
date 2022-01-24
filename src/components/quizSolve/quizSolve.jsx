import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import QuizBooks from '../quizBooks/quiz_books';
import styles from './quizSolve.module.css';

// header에서 로그인 안 보이게
const QuizSolve = (props) => {
    const [page, setPage] = useState(1);
    const [quizCnt, setQuizCnt] = useState(0);
    const [quizBook, setQuizBook] = useState([]);
    const [randomBook, setRandomBook] = useState();

    const handleNext = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        // if(props.onShowBooks(nextPage+1) )
        props.onShowBooks(nextPage);
    };

    const handlePrev = () => {
        const prevPage = page - 1;
        setPage(prevPage);
        props.onShowBooks(prevPage);
    };

    const selectBook = (book) => {
        setQuizCnt(book.cards.length);
        setQuizBook(book);
    };

    const selectRef = useRef();
    const randomIdx = (num) => {
        const randomIdx = new Set();
        while (1) {
            let randomNum = Math.floor(Math.random() * quizCnt);
            randomIdx.add(randomNum);
            if (randomIdx.size >= num) {
                return randomIdx;
            }
        }
    };

    const handleRandomQuiz = () => {
        const randomNum = selectRef.current.value;
        const random = [...randomIdx(randomNum)];
        const randomCards = random.map((idx) => {
            return { ...quizBook, cards: quizBook.cards[idx] };
        });
        setRandomBook(randomCards);
        // console.log(randomCards);
    };

    const handleQuizNum = () => {
        const option = [];
        for (let i = 0; i <= quizCnt; i++) {
            option.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return option;
    };

    return (
        <>
            <Header />
            <section className={styles.container}>
                <div className={styles.quizSetting}>
                    <h1
                        onClick={() => {
                            console.log(randomBook);
                        }}
                    >
                        퀴즈설정
                    </h1>
                    <span>어떤 문제를 풀어볼까요?</span>
                    <div className={styles.quizBooks}>
                        <QuizBooks
                            books={props.books}
                            page={page}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            selectBook={selectBook}
                        />
                    </div>
                </div>
                <div className={styles.quizSelect}>
                    몇 문제를 풀어볼까요?
                    <br />
                    <select
                        ref={selectRef}
                        className={styles.quizSelectBox}
                        onClick={handleRandomQuiz}
                    >
                        {handleQuizNum()}
                    </select>
                </div>
                <div className={styles.quizStart}>
                    <Link to="/quiz" state={{ quiz: randomBook }}>
                        <button className={styles.quizStartBtn}>시작!</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default QuizSolve;
