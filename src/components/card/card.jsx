import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <li className={styles.container}>
      <section className={styles.card}>
        <div className={styles.cardName}>{card.question}</div>
        <div className={styles.hr}></div>
        <div className={styles.cardContent}>{card.result}</div>

        <footer className={styles.cardFooter}>
          <button className={styles.cardEdit}>
            <i class="fas fa-edit fa-2x"></i>
          </button>
          <button className={styles.cardDelete}>
            <i class="fas fa-trash-alt fa-2x"></i>
          </button>
        </footer>
      </section>
    </li>
  );
};

export default Card;
