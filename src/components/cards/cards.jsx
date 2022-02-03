import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css";

const Cards = ({ cards, updateCard, deleteCard }) => {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
      </ul>
    </>
  );
};

export default Cards;
