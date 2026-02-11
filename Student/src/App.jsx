
// 필요한 라이브러리 가져오기.
import { useState, useRef } from 'react';
import './App.css'

//
function App() {
  const [students, setStudents] = useState([]);

  const idRef = useRef(1);
  const onCreate = (student) => {
    const newStudent = {
      id:idRef.current++,
      name:student.name,
      kor:student.kor,
      eng:student.eng,
      math:student.math,
      total:parseInt(student.kor)+parseInt(student.eng)+parseInt(student.math),
      avg:((parseInt(student.kor)+parseInt(student.eng)+parseInt(student.math))/3).toFixed(2),
      date:new Date().getTime()
    };
    setStudents([newStudent, ...students])
  }

  const onDelete = (id)=>{
    setStudents(students.filter((student)=> student.id !== id));
  }

  const onUpdate = (id, editData)=>{
    setStudents(students.map((student)=>{
      if(student.id === id) {
        const kor = parseInt(editData.kor)
        const eng = parseInt(editData.eng)
        const math = parseInt(editData.math)
        return {
          ...student,
          name: editData.name,
          kor, eng, math,
          total:kor+eng+math,
          avg:((kor+eng+math)/3).toFixed(2)
        }
      }
      return student;
    }))
  }
   
    return( <>
    <div>
      <div className='App'>
        <Header />
        <inputStudent onCreate={onCreate}/>
        <list students={students} onDelete={onDelete} onUpdate={onUpdate}/>

      </div>
    </div>
    
    </>
    )


}
export default App
