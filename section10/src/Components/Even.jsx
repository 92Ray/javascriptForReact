import { useEffect } from "react";

const Even = ()=>{
  //마운트될떄 언마운트 될떄 작동
  useEffect(()=>{
    console.log('Even이 마운트될떄');
    
    return ()=> {
      console.log('Even이 언마운트 될떄');
    }
  },[]);
  
  
  
  
  
return <>
<h1>짝수입니다</h1>
</>


}
export default Even;