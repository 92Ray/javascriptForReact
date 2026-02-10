import { useState } from 'react'
import './App.css'
import Even from './components/Even';

function App() {

  const [calculate, setCalculate] = useState({
    n1: 0,
    n2: 0
  });

  const [result, setResult] = useState(0);
  const onChange = (e) => {
    const {name, value} = e.target;
    setCalculate({
      ...calculate,
      [name] : Number(value)
    })
  }

  const onClickPlus = () => {
    setResult(calculate.n1+calculate.n2);
  }
  const onClickMinus = () => {
    setResult(calculate.n1-calculate.n2);
  }
  const onClickMulti = () => {
    setResult(calculate.n1*calculate.n2);
  }
  const onClickDivision = () => {
    setResult(calculate.n1/calculate.n2);
  }

  return (
    <>
    <div className='calculating'>
      {/* 제목 */}
      <h1>계산기</h1>
      {/* 결과값 */}
      <h3>결과값 : {result}</h3>
      {/* 숫자입력 */}
      <label htmlFor="n1">숫자1 : </label>
      <input type="number" id='n1' name='n1' onChange={onChange}/><br/>
      <label htmlFor="n2">숫자2 : </label>
      <input type="number" id='n2' name='n2' onChange={onChange}/>
      <br />
      {/* 버튼 */}
      <button type="button" onClick={onClickPlus}>+</button>
      <button type="button" onClick={onClickMinus}>-</button>
      <button type="button" onClick={onClickMulti}>*</button>
      <button type="button" onClick={onClickDivision}>/</button>
    </div>
    </>
  )
}

export default App
