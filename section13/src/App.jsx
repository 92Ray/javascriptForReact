import { Route, Routes } from 'react-router-dom'
import { useReducer, useRef , createContext  } from 'react'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import NotFound from './components/NotFound'
import Edit from './components/Edit'
import Diary from './components/Diary'

// 가상데이터 
const mockData = [ 
  { 
    id: 1, 
    createdDate: new Date().getTime(), 
    emotionId: 1, 
    content: "1번 일기 내용", 
  }, 
  { 
    id: 2, 
    createdDate: new Date().getTime(), 
    emotionId: 2,
    content: "2번 일기 내용", 
  }, 
]; 

// useReducer 사용하기
function reducer(state, action){
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map(item => item.id === action.data.id ? action.data : item);
    case "DELETE":
      return state.filter(item => item.id !== action.data);
    default:
      return state;
  }
}


  // props 데이터를 공동으로 공유할 장소 설정
  export const DiaryStateContext = createContext()
  export const DiaryDispatchContext = createContext()


function App(){
  const [state, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)
  // 이벤트처리 onCreate, onUpdate, onDelete
  const onCreate = (createdDate, emotionId, content)=>{
    const newItem = {
      id: idRef.current++,
      createdDate: createdDate,
      emotionId: emotionId,
      content: content
    }
    dispatch ({type: "CREATE", data: newItem})
  }
  const onUpdate = (id, createdDate, emotionId, content)=>{
    const newItem = {
      id, //(키값 밸류값 같으면 생략 가능)
      createdDate: createdDate,
      emotionId: emotionId,
      content: content
    }
    dispatch ({type: "UPDATE", data : newItem})
  }

  const onDelete = (id)=>{
    dispatch ({type: "DELETE", data : id})
  }



    return (
  
      <>

      <DiaryStateContext.Provider value={state}>
       <DiaryDispatchContext.Provider value= {{onCreate, onUpdate, onDelete}}>

        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/new/:id' element={ <New />}/>
          <Route path='/diary/:id' element={ <Diary />}/>
          <Route path='/edit/:id' element={ <Edit />}/>
          <Route path='/*' element={ <NotFound />}/>
        </Routes>
       </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>

        
      </>
      )
}

export default App