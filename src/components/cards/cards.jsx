import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css";

const Cards = ({ cards, deleteCard }) => {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => (
          <Card key={card.id} card={card} deleteCard={deleteCard} />
        ))}
      </ul>
    </>
  );
};

export default Cards;
