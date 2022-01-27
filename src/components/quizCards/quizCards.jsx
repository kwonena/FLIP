import React from 'react';
import QuizCard from '../quizCard/quizCard';
import styles from './quizCards.module.css';

const QuizCards = (props) => {
    return (
        <>
            <ul className={styles.list}>
                {/* <QuizCard /> */}
                {/* {cards.map((card) => (
          <QuizCard key={card.id} card={card} />
        ))} */}
            </ul>
        </>
    );
};

export default QuizCards;
