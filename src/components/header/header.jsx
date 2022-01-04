import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate("/")}>
        FLIP
      </h1>
      <span className={styles.login} onClick={() => navigate("/login")}>
        로그인
      </span>
      {/* 로그인 클릭시 라우터 이용해서 로그인 컴포넌트로 이동 */}
    </div>
  );
};

export default Header;
