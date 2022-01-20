import React from "react";
import styles from "./addCard.module.css";

const AddCard = ({ open, close }) => {
  return (
    <section className={open ? `styles.show` : `styles.hidden`}>
      {open && (
        <section className={styles.card}>
          <section className={styles.titleBox}>
            <span className={styles.name}>문제집 이름</span>
            <button className={styles.closeBtn} onClick={close}>
              <i class="fas fa-times fa-2x"></i>
            </button>
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>문제</span>
            <textarea className={styles.textarea}> </textarea>
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <textarea className={styles.textarea}> </textarea>
          </section>
          <button className={styles.addBtn} onClick={close}>
            추가하기
          </button>
        </section>
      )}
    </section>
  );
};

export default AddCard;
