import React, { useState } from "react";
import styles from "./addBook.module.css";
import Header from "../header/header";
import AddCard from "../addCard/addCard";
import Cards from "../cards/cards";
import { useLocation } from "react-router-dom";

const AddBook = () => {
  const location = useLocation();
  const [popOpen, setPopOpen] = useState(false);

  const openPop = () => {
    setPopOpen(true);
  };
  const closePop = () => {
    setPopOpen(false);
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.addBook}>
          <section className={styles.titleContainer}>
            <div className={styles.titleBox}>
              {location.state.title ? (
                <span className={styles.title}>{location.state.title}</span>
              ) : (
                <input
                  type="text"
                  className={styles.title}
                  placeholder="문제집 제목"
                  name="title"
                />
              )}
              <button className={styles.titleBtn}>확인</button>
            </div>
            <span className={styles.text}>0개의 카드를 학습 중이에요.</span>
            <div className={styles.buttons}>
              <button className={styles.newBtn}>최신순</button>
              <button className={styles.starBtn}>즐겨찾기순</button>
            </div>
          </section>
          <button className={styles.addCardBtn} onClick={openPop}>
            새로운 카드 추가하기
          </button>
          <AddCard open={popOpen} close={closePop} />
          <section className={styles.cardList}>
            <Cards cards={location.state.cards} />
          </section>
        </section>
      </section>
    </>
  );
};

export default AddBook;
