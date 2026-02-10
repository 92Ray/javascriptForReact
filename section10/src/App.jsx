import { useEffect, useState , useRef} from 'react'
import './App.css'
import Viewer from './components/Viewer';
import InputController from './components/InputController';
import Even from './components/Even';

function App() {
  const[count,setCount] = useState(0)
  const[number,setNumber] = useState(0)
  const[calculate, setCalculate] = useState(0);
  const isMount = useRef(false);
  const countValue = useRef(0);

  const onClickCalculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        setCalculate(parseInt(num1) + parseInt(num2))
        break;
      case '-':
        setCalculate(parseInt(num1) - parseInt(num2))
        break;
      case '*':
        setCalculate(parseInt(num1) * parseInt(num2))
        break;
      case '/':
        setCalculate(parseInt(num1) / parseInt(num2))
        break;
    };
  };
  const onClickButton = () => {
    setCount(count+1);
  }
  const onClickNumber = () => {
    setNumber(number+1);
  }

useEffect(()=>{
  console.log(`countValue${countValue.current}`)
  countValue.current = countValue.current +1;
  if (isMount.current === false) {
    isMount.current = true
  }else{
    console.log('App update')
  }
})


  useEffect(()=>{
    console.log(`마운트될떄 count,calculate 모드스테이트값이 바뀔떄마다 발생 calculate ${calculate}count ${count}`)
    return ()=>{
      console.log(`언마운트될떄 calculate ${calculate}count ${count}`);
    }
  },[count,calculate]);



  return (
  <>
   <div className='App'>
    <div>
      <h1>계산기</h1>
    </div>
      <Viewer calculate={calculate}/>
      <InputController onClickCalculate={onClickCalculate}/>
      {count % 2 === 0 ?<Even/> : null }
      </div>
      <div>
        <button type="button"onClick={onClickButton}>버튼</button>
        <button type="button"onClick={onClickNumber}>넘버</button>
      </div>
    </>
  )
};
export default App;
