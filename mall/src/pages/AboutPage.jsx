import Header from "../include/Header";
import "./AboutPage.css";
import useCustomLogin from "../hooks/useCustomLogin";

const AboutPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  // 로그인이 안 되어있으면 로그인 유도
  if (!isLogin) {
    alert("About 페이지는 회원만 볼 수 있습니다.");
    return moveToLoginReturn();
  }

  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              AboutPage
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
