import "./app.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import AddBook from "./components/addBook/addBook";
import QuizSolve from "./components/quizSolve/quizSolve";
import Quiz from "./components/quiz/quiz";
import AddCard from "./components/addCard/addCard";
import SignUp from "./components/signUp/signUp";
import { getCookie } from "./cookie";
import * as workbooks from "./api/workbooks";

function App() {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(getCookie("accessToken"));
  const [user, setUser] = useState(getCookie("userEmail"));

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (token) {
      showBooks(1);
    } else {
      setBooks([]);
    }
  }, [token]);

  const showBooks = (page) => {
    workbooks
      .showBooks(page) //
      .then((items) => {
        setBooks(items);
      });
  };

  const showMoreBooks = () => {
    workbooks
      .showBooks(page) //
      .then((items) => {
        setBooks([...books, ...items]);
      });
  };

  const deleteBook = (id) => {
    workbooks
      .deleteBook(id) //
      .then(() => {
        showBooks(1);
      });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                page={page}
                setPage={setPage}
                setToken={setToken}
                setUser={setUser}
                books={books}
                deleteBook={deleteBook}
                user={user}
                showMoreBooks={showMoreBooks}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUser={setUser} />}
          />
          <Route path="/addBook" element={<AddBook showBooks={showBooks} />} />
          <Route path="/quizSolve" element={<QuizSolve />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
