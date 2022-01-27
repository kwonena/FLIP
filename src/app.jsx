import './app.module.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';
import AddBook from './components/addBook/addBook';
import QuizSolve from './components/quizSolve/quizSolve';
import Quiz from './components/quiz/quiz';
import WorkBooks from './API/workbooks';
import AddCard from './components/addCard/addCard';
import Cards from './API/cards';
import SignUp from './components/signUp/signUp';

function App() {
    const workBooks = new WorkBooks();
    const cards = new Cards();

    const [books, setBooks] = useState([]);
    const showBooks = (page) => {
        workBooks
            .showBooks(page) //
            .then((items) => {
                setBooks(items);
            });
    };
    useEffect(() => {
        showBooks(1);
    }, []);

    const loadCards = (id) => {
        cards
            .showCards() //
            .then((id) => {
                console.log('아이디', id);
                setBooks(id);
            });
    };

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Main books={books} loadCards={loadCards} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addBook" element={<AddBook />} />
                    <Route path="/quizSolve" element={<QuizSolve />} />
                    <Route path="/addCard" element={<AddCard />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/singUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
