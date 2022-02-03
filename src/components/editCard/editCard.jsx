import React, { useState } from "react";
import styles from "./editCard.module.css";

const EditCard = ({ open, setOpen, card, updateCard }) => {
  const [question, setQuestion] = useState(card.question);
  const [result, setResult] = useState(card.result);

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleResult = (event) => {
    setResult(event.target.value);
  };

  const editCard = () => {
    updateCard(card.id, question, result);
    setOpen(false);
  };

  // const onKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //
  //   }
  // };

  return (
    <form className={open ? `styles.show` : `styles.hidden`}>
      {open && (
        <section className={styles.card}>
          <div className={styles.titleBox}>
            <button
              className={styles.closeBtn}
              onClick={() => {
                setOpen(false);
              }}
            >
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <section className={styles.textBox}>
            <span className={styles.text}>문제</span>
            <input
              onChange={handleQuestion}
              type="text"
              className={styles.textarea}
              value={question}
            />
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <input
              onChange={handleResult}
              type="text"
              className={styles.textarea}
              value={result}
            />
          </section>
          <button className={styles.addBtn} onClick={editCard}>
            저장하기
          </button>
        </section>
      )}
    </form>
  );
};

export default EditCard;
