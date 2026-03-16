import Header from "../../include/Header";
import AddComponent from "../../components/todo/AddComponent";
import "./AddPage.css";

const AddPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <AddComponent />
          </div>
        </main>
      </div>
    </>
  );
};

export default AddPage;
