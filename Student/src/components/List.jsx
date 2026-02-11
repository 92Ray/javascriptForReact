import StudentInfo from "./StudentInfo";
import { useState } from "react";

 const List = ({students, onDelete, onUpdate})=>{
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilterDate = () => {
    if(search === '') {
      return students;
    }
    return students.filter((student)=>{
      return student.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }
  const filterStudents = getFilterData();
 
 return <>
  <div className="List">
    <h4>Student List 💻</h4>
      <input value={search} onChange={onChangeSearch} type="text" name="search" id="search" placeholder="학생 이름을 입력해주세요..." />
      <div className="studentList">
        <div className="StudentInfo_header">
          <div className="id">번호</div>
          <div className="name">이름</div>
          <div className="kor">국어</div>
          <div className="eng">영어</div>
          <div className="math">수학</div>
          <div className="total">합계</div>
          <div className="avg">평균</div>
          <div className="date">등록일</div>
          <div >관리</div>
        </div>
        {filteredStudents.map((student)=>{
          return <StudentInfo key={student.id} {...student} onDelete={onDelete} onUpdate={onUpdate} />
        })}
      </div>
  </div>

  </>
}
export default List;