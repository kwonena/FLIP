import React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="headerTitle">FLIP</h1>
      <span className="loginBtn" onClick={() => navigate("/")}>
        로그인
      </span>
      {/* 로그인 클릭시 라우터 이용해서 로그인 컴포넌트로 이동 */}
    </div>
  );
};

export default Header;
