import Header from "../../include/Header";
import { useSearchParams } from "react-router-dom";
import "./ListPage.css";

const ListPage = () => {
  const [queryParam] = useSearchParams();
  const page = queryParam.get("page") ? parseInt(queryParam.get("page")) : 1;
  const size = queryParam.get("size") ? parseInt(queryParam.get("size")) : 10;

  return (
    <>
      <div className="main-container">
        <Header />

        <p>
          Todo List page={page} size={size}
          {""}
        </p>
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              ListPage
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ListPage;
