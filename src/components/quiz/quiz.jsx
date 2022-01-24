import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import QuizCard from '../quizCard/quizCard';
import styles from './quiz.module.css';

const Quiz = (props) => {
    const location = useLocation();
    console.log(location.state.quiz);
    return (
        <>
            <Header />
            <section className={styles.container}>
                <span className={styles.cardText}>카드를 클릭해 정답 확인</span>
                <div className={styles.card}>
                    <QuizCard />
                </div>
                <span className={styles.cardPage}>
                    <i className="fas fa-arrow-left"></i> 1 / 10
                    <i className="fas fa-arrow-right"></i>
                </span>
            </section>
        </>
    );
};

export default Quiz;
