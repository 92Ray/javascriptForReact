import { useState, onClickCalculate } from "react";

const InputController = ({onClickCalculate}) => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onChangeNum = (e) => {
    if(e.target.name === 'num1') {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  }

  const onClickButton = (e) => {
    onClickCalculate(num1, num2, e.target.value);
  }

  return <>
    <div className="inputController">
      <label htmlFor="num1">숫자 입력 : </label>
      <input type="number" name="num1" id="num1" value={num1} onChange={onChangeNum}/>
      <br />
      <label htmlFor="num2">숫자 입력 : </label>
      <input type="number" name="num2" id="num2" value={num2} onChange={onChangeNum}/>
    </div>
    <div className="buttonController">
      <button type="button" value={'+'} onClick={onClickButton}>+</button>
      <button type="button" value={'-'} onClick={onClickButton}>-</button>
      <button type="button" value={'*'} onClick={onClickButton}>x</button>
      <button type="button" value={'/'} onClick={onClickButton}>/</button>
    </div>
  </>
}

export default InputController;