import { useState } from 'react';
import '../css/StudentInfo.css'

const StudentInfo = ({id, name, kor, eng, math, total, avg, date, onDelete, onUpdate})=> {
  const onClickDelete = ()=>{
    onDelete(id);
  }

  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({name, kor, eng, math});
  const onChangeEdit = (e)=>{
    setEditData({
      ...editData,
      [e.target.name]:e.target.value
    });
  }

  const toggleIsEdit = ()=>{
    setIsEdit(!isEdit);
  }

  const onClickCancel = () => {
    setIsEdit(false);
    setEditData({ name, kor, eng, math }); // 값 초기화
  };

  const onClickUpdate = ()=>{
    onUpdate(id, editData);
    setIsEdit(false);
  }

  return <>
  <div className="StudentInfo">
    <div className="no">{IdleDeadline}</div>
  { isEdit ? (
    <>
    <div className="name"><input name="name" value={editData.name} onChange={onChangeEdit} /></div>
          <div className="kor"><input type="number" name="kor" value={editData.kor} onChange={onChangeEdit} /></div>
          <div className="eng"><input type="number" name="eng" value={editData.eng} onChange={onChangeEdit} /></div>
          <div className="math"><input type="number" name="math" value={editData.math} onChange={onChangeEdit} /></div>
    </>
  ) : (
    <>
    <div className="name">{name}</div>
    <div className="kor">{kor}</div>
    <div className="eng">{eng}</div>
    <div className="math">{math}</div>
    </>
  )}
    <div className="total">{total}</div>
    <div className="avg">{avg}</div>
    <div className="date">{new Date(date).toLocaleDateString()}</div>
  { isEdit ? (
    <>
      <button className="Update" onClick={onClickUpdate}>저장</button>
      <button className="Delete" onClick={onClickCancel}>취소</button>
    </>
  ) : (
    <>
    <button className="Update" onClick={toggleIsEdit}>수정</button>
    <button className="Delete" onClick={onClickDelete}>삭제</button>
    </>
  )}
 </div>
  </>
}
export default StudentInfo;