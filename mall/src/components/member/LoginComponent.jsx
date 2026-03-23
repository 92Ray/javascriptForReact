import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginPostAsync } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";
import "./LoginComponent.css"; // CSS 분리

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath } = useCustomLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 상태 업데이트 시 객체 불변성 유지
  const handleChange = (e) => {
    setLoginParam({
      ...loginParam,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickLogin = () => {
    console.log("Login Attempt:", loginParam);
    // 여기에 Dispatch(login) 로직을 추가하면 된다.
    doLogin(loginParam).then((data) => {
      console.log("after unwrap...");
      console.log(data);
      if (data.error) {
        alert("이메일과 패스워드 확인");
      } else {
        alert("로그인성공");
        moveToPath("/");
      }
    });
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Login</h2>
      <div className="login-fields">
        {/* 이메일 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            name="pw"
            type="password"
            placeholder="Enter your password"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>{" "}
      {/* 로그인 버튼 영역 */}
      <div className="login-button-wrapper">
        <button
          className="btn-login-submit"
          type="button"
          onClick={handleClickLogin}
        >
          로그인
        </button>
      </div>
      <KakaoLoginComponent />
    </div>
  );
}
