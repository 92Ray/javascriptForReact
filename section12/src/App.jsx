import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import './css/App.css'
import { useReducer, useRef, useState , useCallback , createContext , useMemo} from 'react'
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

// 공용으로 사용되는 공유폴더(데이터 저장소)
export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [count,setCount] = useState(0);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 생성
  const onCreate = useCallback((content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    dispatch({ type: "INSERT", data: newTodo });
  },[]) 

  // 수정
  const onUpdate = useCallback((id) => {
    dispatch({ type: "UPDATE", id : id});
  },[]) 

  // 삭제
  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", id : id });
  },[])
  // 이벤트핸들러 기능을 단 한 번만 실행
  const memonizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  },[onCreate, onUpdate, onDelete]);

  return (
    <>
    <div className="App">
      <Header count={count}/>
      <TodoStateContext.Provider value= {{todos}}>
        <TodoDispatchContext.Provider value={{memonizedDispatch}}>
       <Exam />
       <Editor />
       <List />
       </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
    </>
  );
}

export default App;