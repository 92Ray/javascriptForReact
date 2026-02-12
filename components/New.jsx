import Header from './Header'
import Button from './Button'

const New = ()=>{
  return <>
      <Header leftChild={<Button text={"Left"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} rightChild={<Button text={"Right"} type={"POSITIVE"} onClick={(e)=>{alert(e.target.innerText);}} />} title={"나만의 일기장"} />
    <h1>New</h1>
  </>
}
export default New;