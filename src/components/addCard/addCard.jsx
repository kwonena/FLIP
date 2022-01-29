import React, { useRef, useState } from "react";
import styles from "./addCard.module.css";

const AddCard = ({
  book,
  title,
  open,
  close,
  createOrUpdateCard,
  deleteCard,
  addCard,
}) => {
  const formRef = useRef();
  const questionRef = useRef();
  const resultRef = useRef();

  const [question, setQuestion] = useState();
  const [result, setResult] = useState();

  const onSave = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      question: questionRef.current.value || "",
      result: resultRef.current.value || "",
    };
    formRef.current.reset();
    addCard(card);
  };

  const onChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <form ref={formRef} className={open ? `styles.show` : `styles.hidden`}>
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
            <input
              type="text"
              className={styles.textarea}
              ref={questionRef}
              onChange={onChange}
            />
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <input
              type="text"
              className={styles.textarea}
              ref={resultRef}
              onChange={onChange}
            />
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
    </form>
  );
};

export default AddCard;
