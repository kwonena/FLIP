import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import AddBook from "./components/addBook/addBook";
import QuizSolve from "./components/quizSolve/quizSolve";
import Quiz from "./components/quiz/quiz";
import AddCard from "./components/addCard/addCard";
import SignUp from "./components/signUp/signUp";
import { getCookie } from "./cookie.js";
import * as workbooks from "./API/workbooks.js";

function App() {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(getCookie("accessToken"));
  const [user, setUser] = useState(getCookie("userEmail"));

  // 로그인된 사용자가 있을 경우 사용자의 문제집 리스트를 보여줌
  useEffect(() => {
    if (token) {
      showBooks(page);
    } else {
      setBooks([]);
    }
  }, [token]);

  // 최초로 사용자가 보유한 문제집 로딩(한 페이지)
  const showBooks = (page) => {
    workbooks
      .showBooks(page) //
      .then((items) => {
        setBooks(items);
      });
  };

  // 스크롤 이벤트로 호출된 함수로,
  // 다음 페이지 문제집을 불러오며 기존 문제집 아래에 보여줌
  const showMoreBooks = () => {
    workbooks
      .showBooks(page + 1) //
      .then((items) => {
        setBooks([...books, ...items]);
      });
  };

  // 문제집 삭제 함수
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
          <Route
            path="/addBook"
            element={<AddBook page={page} showBooks={showBooks} />}
          />
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
