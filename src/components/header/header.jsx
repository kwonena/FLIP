import React from "react";
import { useNavigate } from "react-router-dom";
// import Auth from "../../API/auth";
import { setCookie } from "../../cookie";
import styles from "./header.module.css";

const Header = ({ login, setToken, setUser }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    setCookie("accessToken", "", {
      path: "/",
    });
    setCookie("userEmail", "", {
      path: "/",
    });
    navigate("/login");
    setToken("");
    setUser("");
  };
  // const auth = new Auth();
  // const onLogout = () => {
  //   // 새로고침하면 원래대로 돌아옴
  //   auth
  //     .logOut() //
  //     .then((response) => {
  //       console.log(response);
  //       setToken(null);
  //       setUser(null);
  //       navigate("/");
  //     });
  // };

  return (
    <div className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate("/")}>
        FLIP
      </h1>
      {login ? (
        <span className={styles.login} onClick={onLogout}>
          로그아웃
        </span>
      ) : (
        <span className={styles.login} onClick={() => navigate("/login")}>
          로그인
        </span>
      )}
    </div>
  );
};

export default Header;
