import React, { useState } from "react";
import styles from "./addCard.module.css";

const AddCard = ({ open, close, book, addCard }) => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleQuestion = (event) => {
    const qLen = countLength(event.target.value);
    if (qLen <= 70) {
      setQuestion(event.target.value);
    } else {
      alert("70byte까지 입력 가능합니다!");
    }
  };

  const handleResult = (event) => {
    const rLen = countLength(event.target.value);
    if (rLen <= 70) {
      setResult(event.target.value);
    } else {
      alert("70byte까지 입력 가능합니다!");
    }
  };

  const countLength = (content) => {
    var byte = 0;
    for (var i = 0; i < content.length; i++) {
      var currentByte = content.charCodeAt(i);
      currentByte > 128 ? (byte += 2) : byte++;
    }
    return byte;
  };
  // const onKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     onSave();
  //   }
  // };

  const onSave = () => {
    addCard(question, result, book.id);
    setQuestion("");
    setResult("");
    close();
  };

  return (
    <form className={open ? `styles.show` : `styles.hidden`}>
      {open && (
        <section className={styles.card}>
          <div className={styles.titleBox}>
            <span className={styles.name}>{book.title}</span>
            <button className={styles.closeBtn} onClick={close}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <section className={styles.textBox}>
            <span className={styles.text}>문제</span>
            <input
              type="text"
              className={styles.textarea}
              onChange={handleQuestion}
            />
          </section>
          <section className={styles.textBox}>
            <span className={styles.text}>정답</span>
            <input
              type="text"
              className={styles.textarea}
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
