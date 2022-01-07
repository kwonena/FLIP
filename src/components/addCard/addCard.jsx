import React from "react";
import styles from "./addCard.module.css";
import Header from "../header/header";

const AddCard = (props) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.titleBox}>
          <span className={styles.title}>첫번째 문제집 제목</span>
          <span className={styles.text}>0개의 카드를 학습 중이에요.</span>
          <div className={styles.buttons}>
            <button className={styles.newBtn}>최신순</button>
            <button className={styles.starBtn}>즐겨찾기순</button>
          </div>
        </section>
        <button className={styles.addCardBtn}>새로운 카드 추가하기</button>
      </section>
    </>
  );
};

export default AddCard;
