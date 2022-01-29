import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <>
      <button className={styles.cardFront}>
        <div className={styles.cardName}>{card.question}</div>
        <div className={styles.cardContent}>{card.result}</div>
      </button>

      <li className={styles.container}>
        <div className={styles.item}>
          <section>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardCount}>{card.cards.length}개의 카드</div>
          </section>
          <footer className={styles.cardFooter}>
            <button className={styles.cardEdit}>
              <i class="fas fa-edit fa-2x"></i>
            </button>
            <button className={styles.cardDelete}>
              <i class="fas fa-trash-alt fa-2x"></i>
            </button>
          </footer>
        </div>
      </li>
    </>
  );
};

export default Card;
