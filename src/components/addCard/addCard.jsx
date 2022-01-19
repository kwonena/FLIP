import React from "react";
import styles from "./addCard.module.css";

const AddCard = ({ open, close }) => {
  return (
    <section className={open ? `styles.card` : `styles.hidden`}>
      {open ? (
        <>
          <section className={styles.titleBox}>
            <button className={styles.returnBtn}>뒤로가기버튼</button>
            <span className={styles.name}>문제집 이름</span>
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
        </>
      ) : null}
    </section>
  );
};

export default AddCard;
