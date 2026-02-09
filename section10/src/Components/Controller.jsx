import { useState } from 'react';

const Controller = ({ onClickButton }) => {
  // 두 개의 숫자를 각각 관리합니다.
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div className='controller'>
      {/* 입력창 구역 */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(parseInt(e.target.value) || 0)} 
          placeholder="첫 번째 숫자"
        />
        <span>+</span>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(parseInt(e.target.value) || 0)} 
          placeholder="두 번째 숫자"
        />
      </div>

      {/* 연산 버튼 구역 */}
      <div className="button-group">
        {/* 클릭 시 num1과 num2를 인자로 전달 */}
        <button onClick={() => onClickButton("+", num1, num2)}>+</button>
        <button onClick={() => onClickButton("-", num1, num2)}>-</button>
        <button onClick={() => onClickButton("*", num1, num2)}>*</button>
        <button onClick={() => onClickButton("/", num1, num2)}>/</button>
        <button onClick={() => {
            onClickButton("reset");
            setNum1(0);
            setNum2(0);
        }}>Clear</button>
      </div>
    </div>
  );
};

export default Controller;