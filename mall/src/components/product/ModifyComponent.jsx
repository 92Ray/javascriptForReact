import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";

const ModifyComponent = ({ tno, moveToList, moveToRead }) => {
  return <div className="modify-container">Produc Modify Component</div>;
};
export default ModifyComponent;
