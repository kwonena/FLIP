import React from "react";
import styles from "./addBook.module.css";
import Header from "../header/header";

const AddBook = (props) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.titleContainer}>
          <div className={styles.titleBox}>
            <input
              type="text"
              className={styles.title}
              placeholder="문제집 제목"
              name="title"
            />
            <button className={styles.titleBtn}>확인</button>
          </div>
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

export default AddBook;