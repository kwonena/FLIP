import React, { useState } from "react";
import styles from "./editCard.module.css";

const EditCard = ({ open, setOpen, card, updateCard }) => {
  const [question, setQuestion] = useState(card.question);
  const [result, setResult] = useState(card.result);

  // 문제, 정답 입력 및 글자 수 제한
  const handleQuestion = (event) => {
    const qLen = countLength(event.target.value);
    if (qLen <= 70) {
      setQuestion(event.target.value);
    } else {
      alert("문제는 70byte까지 입력 가능합니다!");
    }
  };

  const handleResult = (event) => {
    const rLen = countLength(event.target.value);
    if (rLen <= 88) {
      setResult(event.target.value);
    } else {
      alert("정답은 88byte까지 입력 가능합니다!");
    }
  };

  // 글자 수를 세는 함수
  const countLength = (content) => {
    let byte = 0;
    for (let i = 0; i < content.length; i++) {
      let currentByte = content.charCodeAt(i);
      currentByte > 128 ? (byte += 2) : byte++;
    }
    return byte;
  };

  const editCard = () => {
    updateCard(card.id, question, result);
    setOpen(false);
  };

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
