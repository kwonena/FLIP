import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <>
      <button className={styles.cardFront}>
        <div className={styles.cardName}>{card.question}</div>
        <div className={styles.cardContent}>{card.result}</div>
      </button>
    </>
  );
};

export default Card;
