
const Viewer = ({count})=> {
  console.log("Viewr 리렌더링 ${count}")
  
  return <>
  <div className='viewer'>
      <h1>계산기 결과값</h1>
      <h2>{count}</h2>
     </div>
  </>
}

export default Viewer;