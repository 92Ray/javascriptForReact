import { useState } from "react";
import Viewer from "./Components/Viewer";
import Controller from "./Components/Controller";

function App() {
  const [count, setCount] = useState(0);

  // 인자를 3개(연산자, 숫자1, 숫자2) 받도록 수정
  const onClickButton = (operator, v1, v2) => {
    switch (operator) {
      case "+": setCount(v1 + v2); break;
      case "-": setCount(v1 - v2); break;
      case "*": setCount(v1 * v2); break;
      case "/": setCount(v1 / v2); break;
      case "reset": setCount(0); break;
      default: break;
    }
  };

  return (
    <div className="app">
      <h1>간편 계산기</h1>
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;