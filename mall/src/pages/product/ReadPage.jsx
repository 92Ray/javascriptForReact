import Header from "../../include/Header";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { useCallback } from "react";
import ReadComponent from "../../components/todo/ReadComponent";
import "./ReadPage.css";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { pno } = useParams();

  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent pno={pno} />
      </div>
    </>
  );
};

export default ReadPage;
