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
import WorkBooks from "./API/workbooks";

function App() {
  // const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [cards, setCards] = useState([]);
  const [token, setToken] = useState(null);

  const workBooks = new WorkBooks(token);

  const showBooks = (page) => {
    workBooks
      .showBooks(page) //
      .then((items) => {
        setBooks(items);
      });
  };
  useEffect(() => {
    showBooks(1);
    console.log(books);
    console.log(token);
  }, [token]);

  const deleteBook = (id) => {
    workBooks
      .deleteBooks(id) //
      .then((result) => {
        if (result === 200) {
          showBooks(1);
        }
      });
  };

  const showCards = (page) => {
    workBooks
      .showCards(page) //
      .then((items) => {
        setCards(items);
      });
  };
  const addCard = (card, id) => {
    workBooks.createCard(card, id).then((result) => {
      if (result === 200) {
        showBooks(1);
      }
    });
  };

  const updateCard = (card) => {
    workBooks.modifyCard(card);
  };

  const deleteCard = (id) => {
    workBooks
      .deleteCard(id) //
      .then(showCards(1));
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main books={books} deleteBook={deleteBook} setToken={setToken} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/addBook"
            element={
              <AddBook
                updateCard={updateCard}
                deleteCard={deleteCard}
                addCard={addCard}
                cards={cards}
              />
            }
          />
          <Route
            path="/quizSolve"
            element={<QuizSolve workBooks={workBooks} token={token} />}
          />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
