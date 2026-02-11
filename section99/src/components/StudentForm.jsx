
// 학생을 "등록하는 역할"을 수행.
// 상태는 App이 가지고 있고, StudentForm은 입력 UI만 담당한다.

const StudentForm = ({ form, onChange, onAdd }) => (
  <div style={{ marginBottom: "16px" }}>
    {/* StudentForm이 입력값을 변경하면 App의 handleChange를 호출한다. */}
    <input name="name" value={form.name} onChange={onChange} placeholder="이름" />
    <input name="kor" value={form.kor} onChange={onChange} placeholder="국어" />
    <input name="eng" value={form.eng} onChange={onChange} placeholder="영어" />
    <input name="math" value={form.math} onChange={onChange} placeholder="수학" />
    {/* StudentForm이 등록버튼을 누르면 App의 handleAdd를 호출한다. */}
    <button onClick={onAdd}>등록</button>
  </div>
);

export default StudentForm;
