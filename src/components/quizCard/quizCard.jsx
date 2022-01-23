import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './quizCard.module.css';

const QuizCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <button className={styles.cardFront} onClick={handleClick}>
                <div className={styles.cardName}>문제집 이름</div>
                <div className={styles.cardContent}>Q.문제</div>
            </button>
            <button className={styles.cardBack} onClick={handleClick}>
                A.문제 답 어쩌구
            </button>
        </ReactCardFlip>
    );
};

export default QuizCard;
