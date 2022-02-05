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

function App({ workBooks, auth }) {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(getCookie("accessToken"));
  const [user, setUser] = useState(getCookie("userEmail"));

  useEffect(() => {
    if (token) {
      showBooks(1);
    } else {
      setBooks([]);
    }
  }, [token]);

  const showBooks = (page) => {
    workBooks
      .showBooks(page) //
      .then((items) => {
        setBooks(items);
      });
  };
  const deleteBook = (id) => {
    workBooks
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
                setToken={setToken}
                setUser={setUser}
                books={books}
                deleteBook={deleteBook}
                user={user}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login auth={auth} setToken={setToken} setUser={setUser} />
            }
          />
          <Route
            path="/addBook"
            element={<AddBook workBooks={workBooks} showBooks={showBooks} />}
          />
          <Route
            path="/quizSolve"
            element={<QuizSolve workBooks={workBooks} />}
          />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signUp" element={<SignUp auth={auth} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
