import { Link } from "react-router-dom";
import Header from "../include/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <Link to={"/todo/list?page=3&size=20"}>LIST PAGE</Link> <br />
          <a href="/about" className="nav-link">
            A ABOUT PAGE
          </a>
        </div>

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              MainPage
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
