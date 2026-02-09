
import './App.css'
import { useState } from 'react'
import Bulb from './components/Bulb';
import Register from './components/Register';
import HookExam from './components/HookExam';
// 실제로 작업하는 공간. 다른 건 건드리지 말기
// Header, App 등 첫글자는 대문자.
// 보통은 모델 하나에 컴포넌트 하나. 두 개 이상 만들면 안 된다.

export default function App() {

return<>
    <HookExam />
    </>
 } 


 /*
export default function App() {
  const [count, setCount] = useState();

  let count1 = 0;

  function setCount1(value){
    count1 = value;
  }
 
  // count1 = 10; <-이건 절대 안된다.
  setCount1(10) // 반드시 이렇게 해야 한다.
 } 

*/