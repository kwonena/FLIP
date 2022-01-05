import "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import AddBook from "./components/addBook/addBook";
import QuizSolve from "./components/quizSolve/quizSolve";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/quizSolve" element={<QuizSolve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
