import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './quizCard.module.css';

const QuizCard = ({ quiz }) => {
    const [page, setPage] = useState(0);
    const [card, setCard] = useState(quiz[page].cards); // 보여지는 카드

    // 카드 페이징
    const handleNext = () => {
        setIsFlipped(false);
        const next = page + 1;
        if (next < quiz.length) {
            setCard(quiz[next].cards);
            setPage(next);
        } else {
            alert('마지막 카드 입니다!');
        }
    };

    const handlePrev = () => {
        setIsFlipped(false);
        const prev = page - 1;
        if (prev < 0) {
            alert('첫번째 카드 입니다!');
        } else {
            setCard(quiz[prev].cards);
            setPage(prev);
        }
    };

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <section className={styles.quiz}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <button className={styles.cardFront} onClick={handleClick}>
                    <div className={styles.cardName}>{quiz[page].title}</div>
                    <div className={styles.cardContent}>{card.question}</div>
                </button>
                <button className={styles.cardBack} onClick={handleClick}>
                    {card.result}
                </button>
            </ReactCardFlip>
            <span className={styles.cardPage}>
                <button onClick={handlePrev}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                {page + 1} / {quiz.length}
                <button onClick={handleNext}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </span>
        </section>
    );
};

export default QuizCard;
