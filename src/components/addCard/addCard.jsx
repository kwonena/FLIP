import React, { useRef, useState } from "react";
import WorkBooks from "../../API/workbooks";
import styles from "./addCard.module.css";

const AddCard = ({ bookId, title, open, close, showCards, addCard }) => {
  const workBooks = new WorkBooks();

  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const formRef = useRef();
  const questionRef = useRef();
  const resultRef = useRef();

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleResult = (event) => {
    setResult(event.target.value);
  };

  const onSave = () => {
    close();
    workBooks
      .addCard(question, result, bookId) //
      .then((response) => {
        console.log(response.statusCode);
        //setCardsInBook(items);
        setQuestion(response.card.question);
        setResult(response.card.result);
        console.log("카드 추가22");
        showCards(bookId);
      });
  };

  return (
    <form ref={formRef} className={open ? `styles.show` : `styles.hidden`}>
      {open && (
        <section className={styles.card}>
          <div className={styles.titleBox}>
            <span className={styles.name}>{title}</span>
            <button className={styles.closeBtn} onClick={close}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <section className={styles.textBox}>
            <span className={styles.text}>문제</span>
            <input
              type="text"
              className={styles.textarea}
              ref={questionRef}
              onChange={handleQuestion}
            />
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <input
              type="text"
              className={styles.textarea}
              ref={resultRef}
              onChange={handleResult}
            />
          </section>
          <button className={styles.addBtn} onClick={onSave}>
            추가하기
          </button>
        </section>
      )}
    </form>
  );
};

export default AddCard;
