import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import './css/App.css'
import { useReducer, useRef } from 'react' // useState는 이제 안 쓰니 빼셔도 됩니다.
import Exam from './components/Exam'

// 1. 초기 데이터 (기본 세팅)
const mockData = [ 
  { id: 0, isDone: false, content: "공부", date: new Date().getTime() },
  { id: 1, isDone: false, content: "독서", date: new Date().getTime() },
  { id: 2, isDone: false, content: "운동", date: new Date().getTime() },
];

// 2. 수리공 매뉴얼 (로직 전담)
function reducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...todos]; 
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return todos.map((todo) =>{
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      });
    default:
      return todos;
  }
}

function App() {
  // 3. 엔진 장착 (매뉴얼과 데이터 연결)
  const [todos, dispatch] = useReducer(reducer, mockData); 
  const idRef = useRef(3);


  // 추가 요청서 송신
  const onCreate = (content) => {
    let newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    dispatch({ type: "INSERT", data: newTodo });
  };

  // 수정 요청서 송신
  const onUpdate = (id) => {
    dispatch({
      type: "UPDATE",
      id : id,
    });
  };

  // 삭제 요청서 송신
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  // 화면 렌더링
  return (
    <div className="App">
      <Header />
      <Exam />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
  // --- 여기까지 App 함수 내부 ---
}

export default App;