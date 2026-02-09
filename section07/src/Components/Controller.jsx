
const Controller = ({onClickButton})=> {
  return <>
  <div className='Controller'>
    <button type="button" onClick={onClickButton} value={-1}>-1</button>
    <button type="button" onClick={onClickButton} value={-10}>-10</button>
    <button type="button" onClick={onClickButton} value={-100}>-100</button>
    <button type="button" onClick={onClickButton} value={100}>+100</button>
    <button type="button" onClick={onClickButton} value={10}>+10</button>
    <button type="button" onClick={onClickButton} value={1}>+1</button>
  </div>
  </>
}

export default Controller;