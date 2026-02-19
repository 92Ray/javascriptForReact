import React, { useContext, useEffect, useMemo, useState } from 'react';
import { replace, useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext,DiaryStateContext } from '../App';
import Header from './Header';
import Button from './Button';
import Editor from './Editor';


const Edit = ()=>{
  const nav = useNavigate();
  const params = useParams();
  const {onUpdate,onDelete} = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  // useState와 useEffect를 제거하고 useMemo로 대체
  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산

  // 데이터 확인 및 리다이렉트 로직
  useEffect(() => {
    if (data.length < 0 && !curDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [data, curDiaryItem, nav]);

  // 데이터가 로드될 때까지 렌더링 방어
  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  };

  // 삭제하기
  const onClickDelete = ()=>{
    if(window.confirm("일기를 정말 삭제 하시겠습니까?")) {
      onDelete(Number(params.id));
      nav("/", {replace:true})
    };
  }

  // 수정하기
  const onSubmit = (input)=>{
    if(window.confirm("일기를 정말 수정 하시겠습니까?")){
      onUpdate(Number(params.id), input.createdDate.getTime(), input.emotionId, input.content)
      nav("/",{replace:true})
    }
  }
  return <>
    <div>
      <Header
      title={"일기 수정하기"}
      leftChild={<Button text={"뒤로가기"} onClick={()=>{nav(-1)}}/>}
      rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}
      />
      <Editor initData = {curDiaryItem} onSubmit={onSubmit}/>
    </div>
   </>
}
export default Edit;