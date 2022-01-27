import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import QuizCard from '../quizCard/quizCard';
import styles from './quiz.module.css';

const Quiz = (props) => {
    const location = useLocation();

    return (
        <>
            <Header />
            <div className={styles.container}>
                <section className={styles.quiz}>
                    <span className={styles.cardText}>
                        카드를 클릭해 정답 확인
                    </span>
                    <div className={styles.card}>
                        <QuizCard quiz={location.state.quiz} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Quiz;
