import { useState, useRef } from 'react';

const InputStudent = ({onCreate})=>{
  const [student, setStudent] = useState({
    name:"",
    kor:"",
    eng:"",
    math:""
  });
  const inputRef = useRef();

  const onChangeStudent = (e) => {
    setStudent({
      ...student,
      [e.target.student]:e.target.value
    });
  }

  const onSubmit = () => {
    if(student === null) {
      inputRef.current.focus();
      return;
    }
    onCreate(student);
    setStudent({
      name:"",
      kor:0,
      eng:0,
      math:0
    });
  }

  return <>
    <div className='InputStudent'>
      <table>
        <tr>
          <th>이름</th>
          <th>언어</th>
          <th>외국어</th>
          <th>수리</th>
        </tr>
        <tr>
          <td><input ref={inputRef} value={student.name} type="text" text="name" id="name" placeholder="이름" onChange={onChangeStudent}/></td>
          <td><input ref={inputRef} value={student.kor} type="number" name="kor" id="kor" onChange={onChangeStudent}/></td>
          <td><input ref={inputRef} value={student.eng} type="number" name="eng" id="eng" onChange={onChangeStudent}/></td>
          <td><input ref={inputRef} value={student.math} type="number" name="math" id="math" onChange={onChangeStudent}/></td>
        </tr>
      </table>
      <button type = "button" onClick={onSubmit}>입력하기</button>
    </div>
  </>


}
export default InputStudent;