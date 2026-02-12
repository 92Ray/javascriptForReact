import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useState, useContext } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryList = ({monthlyDate}) => {
  // 정렬순서 상태변화
  const [sortType, setSortType] = useState("latest");

  // Context에서 onCreate 가져오기
  const { onCreate } = useContext(DiaryDispatchContext);

  // 정렬처리
  const getSortedMonthlyDate = () => {
    return [...(monthlyDate || [])].sort((a, b) => {
      if (sortType === "oldest") return a.createdDate - b.createdDate;
      return b.createdDate - a.createdDate;
    });
  };

  const sortedMonthlyDate = getSortedMonthlyDate();

  // 새로운 일기 버튼 클릭 핸들러
  const handleNewDiary = () => {
    // 임시 예시: 오늘 날짜, 감정 3, 기본 내용
    onCreate(Date.now(), 3, "새로운 일기 내용");
  };

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value={"latest"}>LATEST</option>
          <option value={"oldest"}>OLDEST</option>
        </select>
        <Button text={"새로운일기쓰기"} type={"POSITIVE"} onClick={()=>navigator("/new")} />
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