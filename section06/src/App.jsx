
import './App.css'
import { useState } from 'react'
import Viewer from './Componensts/Viewr'
import Controller from './Componensts/Controller';

function App() {
  const [ count, setCount ] = useState(0);
  const onClickButton = (e)=>{
    setCount(count + parseInt(e.target.value))
  };
  console.log(`Viewr 리렌더링 ${count}`);
  return (
    <>
    <div className="app">
    {/* 제목 */}
     <h1>계산기</h1>
     {/* 계산기 결과값 */}
     <Viewer count = {count}/>
     {/* 카운터이벤트버튼 */}
     <Controller onClickButton={onClickButton}/>
    </div>

    </>
  )
}

export default App
