import React, { useState } from "react";
import styles from "./card.module.css";
import EditCard from "../editCard/editCard";

const Card = ({ card, updateCard, deleteCard }) => {
  const [clicked, setClicked] = useState(false);

  const onDeleteCard = () => {
    deleteCard(card.id);
  };

  return (
    <>
      <li className={styles.container}>
        <section className={styles.card}>
          <div className={styles.cardName}>{card.question}</div>
          <div className={styles.hr}></div>
          <div className={styles.cardContent}>{card.result}</div>

          <footer className={styles.cardFooter}>
            <button
              className={styles.cardEdit}
              onClick={() => {
                setClicked(true);
              }}
            >
              <i className="fas fa-edit fa-2x"></i>
            </button>
            <button className={styles.cardDelete} onClick={onDeleteCard}>
              <i className="fas fa-trash-alt fa-2x"></i>
            </button>
          </footer>
        </section>
      </li>
      <EditCard
        open={clicked}
        setOpen={setClicked}
        card={card}
        updateCard={updateCard}
      />
    </>
  );
};

export default Card;
