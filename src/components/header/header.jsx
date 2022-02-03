import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ login }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate("/")}>
        FLIP
      </h1>
      {!login && (
        <span className={styles.login} onClick={() => navigate("/login")}>
          로그인
        </span>
      )}
    </div>
  );
};

export default Header;
