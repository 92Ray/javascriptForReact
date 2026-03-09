import Header from "../../include/Header";
import { useParams, useSearchParams } from "react-router-dom";
import "./ModifyPage.css";

const ModifyPage = () => {
  const { tno } = useParams();
  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <>
      <div className="main-container">
        <Header />

        <p>Modify Page tno = {tno}</p>
        <p>
          Modify Page page = {page} size={size}
        </p>
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              ModifyPage
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ModifyPage;
