import { useState } from "react";

const StudentItem = ({ student, onDelete, onUpdate }) => {
  const { id, name, kor, eng, math, total, avg, date } = student;

  // 편집 모드 상태 (StudentItem 내부에서 관리)
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name,
    kor,
    eng,
    math
  });

  // === input 변경 처리 ===
  // 주어: StudentItem
  // 어디서 받음: 각 input onChange 이벤트
  // 어디로 보내는지: editForm 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  // === 저장 버튼 ===
  // 주어: StudentItem
  // 어디서 받음: editForm 상태
  // 어디로 보내는지: onUpdate(id, updatedStudent) → App의 handleUpdate
  const handleSave = () => {
    const updatedKor = parseInt(editForm.kor) || 0;
    const updatedEng = parseInt(editForm.eng) || 0;
    const updatedMath = parseInt(editForm.math) || 0;
    const updatedTotal = updatedKor + updatedEng + updatedMath;
    const updatedAvg = (updatedTotal / 3).toFixed(2);

    // App으로 보내서 students 상태 갱신
    onUpdate(id, {
      ...editForm,
      kor: updatedKor,
      eng: updatedEng,
      math: updatedMath,
      total: updatedTotal,
      avg: updatedAvg
    });

    // 편집 모드 종료
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
      {isEditing ? (
        <div>
          <input name="name" value={editForm.name} onChange={handleChange} placeholder="이름" />
          <input name="kor" value={editForm.kor} onChange={handleChange} placeholder="국어" />
          <input name="eng" value={editForm.eng} onChange={handleChange} placeholder="영어" />
          <input name="math" value={editForm.math} onChange={handleChange} placeholder="수학" />
          <button onClick={handleSave}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </div>
      ) : (
        <div>
          <h4>{name} (등록: {date})</h4>
          <p>국어: {kor}, 영어: {eng}, 수학: {math}</p>
          <p>총점: {total}, 평균: {avg}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
          {/* 삭제 버튼 클릭 → App의 handleDelete 실행 */}
          <button onClick={() => onDelete(id)}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default StudentItem;
