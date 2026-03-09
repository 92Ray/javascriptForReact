import Header from "../include/Header";
import "./LoginPage.css"; // 필요하면 스타일 파일 생성

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 (예: API 호출)
    console.log("로그인 시도");
    // 성공 시 리다이렉트: window.location.href = "/" 등
  };

  return (
    <div className="main-container">
      <Header />
      <main className="content-area">
        <div className="login-form-wrapper">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>로그인</h2>
            <div className="form-group">
              <label>아이디</label>
              <input type="text" name="username" required />
            </div>
            <div className="form-group">
              <label>비밀번호</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit" className="custom-btn-outline">
              로그인
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
