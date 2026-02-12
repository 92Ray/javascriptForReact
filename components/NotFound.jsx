import Header from './Header'
import Button from './Button'

const NotFound = ()=>{

  return <>
      <Header leftChild={<Button text={"Left"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} rightChild={<Button text={"Right"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} title={"나만의 일기장"} />
    <h1>NotFound</h1>
  </>
}
export default NotFound;