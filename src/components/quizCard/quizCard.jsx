import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './quizCard.module.css';

const QuizCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <section className={styles.quiz}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <button className={styles.cardFront} onClick={handleClick}>
                    <div className={styles.cardName}>문제집 이름</div>
                    <div className={styles.cardContent}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Est corrupti, voluptatibus tempore deserunt, rerum
                        sed, laborum fugiat debitis veritatis nobis modi iste
                        placeat adipisci ipsam. Delectus accusantium quas cumque
                        recusandae. In autem mollitia amet a, id itaque dolores
                        doloremque magnam deleniti aperiam ipsa sequi aut libero
                        dolor odit assumenda excepturi iste at ex tempora. Ex
                        aliquam sint error esse quos?
                    </div>
                </button>
                <button className={styles.cardBack} onClick={handleClick}>
                    Lorem ipsum dolor sit.
                </button>
            </ReactCardFlip>
            <span className={styles.cardPage}>
                <button>
                    <i className="fas fa-arrow-left"></i>
                </button>
                1 / 10
                <button>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </span>
        </section>
    );
};

export default QuizCard;
