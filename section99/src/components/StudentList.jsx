import StudentItem from "./StudentItem";

const StudentList = ({ students, onDelete, onUpdate, search }) => {
  // 주어: StudentList
  // 어디서 받음: App에서 props로 전달
  // - students: 학생 배열
  // - onDelete: 삭제 함수
  // - onUpdate: update 함수
  // - search: 검색어
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filteredStudents.map(s => (
        <StudentItem
          key={s.id}
          student={s}      // 주어: StudentItem
          onDelete={onDelete} // 어디서 받음: App → StudentList → StudentItem
          onUpdate={onUpdate} // 어디서 받음: App → StudentList → StudentItem
        />
      ))}
    </div>
  );
};

export default StudentList;
