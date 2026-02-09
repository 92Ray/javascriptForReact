import './App.css';
import { useState, useEffect, useRef } from 'react';
import Controller from './Components/Controller';
import Viewer from './Components/Viewer';
import Even from './Components/Even';

function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (e) => {
    setCount(count + parseInt(e.target.value));
  }

  const isMount = useRef(false);
  const countValue = useRef(0);

  useEffect(()=>{
    console.log(`countValue = ${countValue.current}`);
    countValue.current = countValue.current + 1;
    if(isMount.current === false) {
      isMount.current = true;
      return;
    } else {
      console.log("App mount 작동");
    }
  });

 return (
 <>
 <div className="App">
  {/* 제목 */}
  <h1>Counter App</h1>
  {/* 카운터뷰 */}
  <Viewer count={count} />
  {/* 카운터 이벤트버튼 */}
  <Controller onClickButton = {onClickButton} />
  {count % 2 === 0 ? <Even /> : null }
 </div>
 </>
 );
}
export default App;