import { useState } from "react";

const Count = ()=> {

   const [count, setCount] = useState(0);
  const onPlusClick = (e) => { setCount(count + 1) }
  <div>
    <h1>{count}</h1>
        <button type="button" onClick={onPlusClick}> + </button>
  </div>
  
  return <></>
}

export default Count;