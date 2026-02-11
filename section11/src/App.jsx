import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import './css/App.css'
import { useReducer, useRef } from 'react'
import Exam from './components/Exaam'

// 전역변수
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "공부",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "독서",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동",
    date: new Date().getTime(),
  },
];

function reducer(todos, action) {
  switch (action.type) {   
    case "INSERT":
      return [action.data, ...todos];

    case "DELETE":
      return todos.filter((todo) => todo.id !== action.id); 

    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );

    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 생성
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    dispatch({ type: "INSERT", data: newTodo });
  };

  // 수정
  const onUpdate = (id) => {
    dispatch({ type: "UPDATE", id : id});
  };

  // 삭제
  const onDelete = (id) => {
    dispatch({ type: "DELETE", id : id });
  };

  return (
    <div className="App">
      <Header />
      <Exam />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
