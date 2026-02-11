

// 검색 입력 UI 담당.
// 실제 검색 로직은 StudentList에서 처리.
const SearchBar = ({ search, onChange }) => (
  <div style={{ marginBottom: "16px" }}>
    {/* SearchBar가 입력값을 변경하면 App의 setSearch를 호출한다. */}
    <input placeholder="이름 검색" value={search} onChange={onChange} />
  </div>
);

export default SearchBar;
