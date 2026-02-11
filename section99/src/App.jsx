import { useState } from "react";
import StudentForm from "./components/StudentForm";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";

export default function App() {
  // App가 학생 리스트 상태를 관리함 → 모든 학생 데이터의 단일 소스
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", kor: "", eng: "", math: "" }); // 입력폼 상태
  const [search, setSearch] = useState(""); // 검색어 상태

  // === 입력폼 변경 ===
  // 주어: App
  // 어디서 받음: StudentForm에서 onChange 이벤트
  // 어디로 보내는지: form 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // === 학생 추가 ===
  // 주어: App
  // 어디서 받음: StudentForm에서 onAdd 이벤트
  // 어디로 보내는지: students 상태 업데이트
  const handleAdd = () => {
    if (!form.name) return alert("이름을 입력하세요");

    const kor = parseInt(form.kor) || 0;
    const eng = parseInt(form.eng) || 0;
    const math = parseInt(form.math) || 0;
    const total = kor + eng + math;
    const avg = (total / 3).toFixed(2);
    const date = new Date().toLocaleString();

    const newStudent = {
      id: Date.now(),
      ...form,
      kor, eng, math, total, avg,
      date,
    };

    setStudents(prev => [...prev, newStudent]); // students 상태에 추가
    setForm({ name: "", kor: "", eng: "", math: "" }); // 입력폼 초기화
  };

  // === 학생 삭제 ===
  // 주어: App
  // 어디서 받음: StudentItem에서 삭제 버튼 클릭 → onDelete(id)
  // 어디로 보내는지: students 상태에서 해당 id 제거
  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  // === 학생 정보 업데이트 ===
  // 주어: App
  // 어디서 받음: StudentItem에서 편집 후 onUpdate(id, updatedStudent) 호출
  // 어디로 보내는지: students 상태에서 해당 학생 id 찾아 데이터 갱신
  const handleUpdate = (id, updatedStudent) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, ...updatedStudent } : s))
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>학생 성적 관리</h2>

      {/* StudentForm */}
      {/* 주어: App */}
      {/* 어디서 받음: StudentForm에서 onChange, onAdd */}
      {/* 어디로 보내는지: handleChange → form, handleAdd → students */}
      <StudentForm form={form} onChange={handleChange} onAdd={handleAdd} />

      {/* SearchBar */}
      {/* 주어: App */}
      {/* 어디서 받음: SearchBar에서 onChange 이벤트 */}
      {/* 어디로 보내는지: search 상태 업데이트 */}
      <SearchBar search={search} onChange={e => setSearch(e.target.value)} />

      {/* StudentList */}
      {/* 주어: App */}
      {/* 어디서 받음: students 상태 + handleDelete + handleUpdate + search */}
      {/* 어디로 보내는지: StudentItem에 각각 전달 */}
      <StudentList
        students={students}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        search={search}
      />
    </div>
  );
}
