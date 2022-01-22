import React from "react";
import QuizCard from "../quizCard/quizCard";
import styles from "./quizCards.module.css";

const QuizCards = ({ cards }) => {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => (
          <QuizCard key={card.id} card={card} />
        ))}
      </ul>
    </>
  );
};

export default QuizCards;
