import "./app.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import AddBook from "./components/addBook/addBook";
import QuizSolve from "./components/quizSolve/quizSolve";
import Quiz from "./components/quiz/quiz";
import WorkBooks from "./api/workbooks";
import AddCard from "./components/addCard/addCard";

function App() {
  const workBooks = new WorkBooks();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    workBooks
      .showBooks() //
      .then((items) => {
        console.log(items);
        setBooks(items);
      });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main books={books} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/quizSolve" element={<QuizSolve books={books} />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
