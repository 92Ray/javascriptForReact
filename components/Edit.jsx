import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from './Header'
import Button from './Button'

const Edit = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const [nickName, setNickName] = useState("");

  const onChangeNickName = (e)=>{
    setNickName(e.target.value);
  }

  const onClickChangeName = (e)=>{
    setSearchParams({name:nickName})
  }

  return <>
   <Header leftChild={<Button text={"Left"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} rightChild={<Button text={"Right"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} title={"나만의 일기장"} />
    <h1>Edit {`name = ${searchParams.get("name")  ?? "아무개" }`}님 환영합니다.</h1>
    <input type="text" name="name" id="name" value={nickName} onChange={onChangeNickName} />
    <button onClick={onClickChangeName}>이름 변경</button>
  </>
}
export default Edit;