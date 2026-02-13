import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState, useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ monthlyDate }) => {
  // 정렬순서 상태변화
  const [sortType, setSortType] = useState("latest");

  // Context에서 onCreate 가져오기 (지금은 안 써도 일단 유지)
  const { onCreate } = useContext(DiaryDispatchContext);

  const nav = useNavigate();

  // 정렬처리
  const getSortedMonthlyDate = () => {
    return [...(monthlyDate || [])].sort((a, b) => {
      if (sortType === "oldest") return a.createdDate - b.createdDate;
      return b.createdDate - a.createdDate;
    });
  };

  const sortedMonthlyDate = getSortedMonthlyDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value={"latest"}>LATEST</option>
          <option value={"oldest"}>OLDEST</option>
        </select>

        <Button
          text={"새로운일기쓰기"}
          type={"POSITIVE"}
          onClick={() => nav("/new")}
        />
      </div>

      <div className="list_Wapper">
        {sortedMonthlyDate.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
