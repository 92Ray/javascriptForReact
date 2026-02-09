
import { useState } from "react";

const Viewer = ({count}) => {
  console.log(`viewer 리랜더링 ${count}`);
  return <>
  <div className='viewer'>
    <h1>현재 카운트</h1>
    <h2>{count}</h2>
  </div>
  </>
}

export default Viewer;