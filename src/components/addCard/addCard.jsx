import React, { useRef } from "react";
import styles from "./addCard.module.css";

const AddCard = ({ book, title, open, close, createOrUpdateCard }) => {
  const questionRef = useRef();
  const resultRef = useRef();

  const onSave = () => {
    console.log("ㅎㅇ");
    createOrUpdateCard(book.cards.id); // 여기서 에러남
  };

  return (
    <section className={open ? `styles.show` : `styles.hidden`}>
      {open && (
        <section className={styles.card}>
          <div className={styles.titleBox}>
            <span className={styles.name}>{title}</span>
            <button className={styles.closeBtn} onClick={close}>
              <i class="fas fa-times fa-2x"></i>
            </button>
          </div>
          <section className={styles.textBox}>
            <span className={styles.text}>문제</span>
            <input type="text" className={styles.textarea} ref={questionRef} />
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <input type="text" className={styles.textarea} ref={resultRef} />
          </section>
          <button
            className={styles.addBtn}
            onClick={() => {
              close();
              onSave();
            }}
          >
            추가하기
          </button>
        </section>
      )}
    </section>
  );
};

export default AddCard;
