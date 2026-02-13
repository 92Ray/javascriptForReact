import Header from './Header'
import Button from './Button'
import Editor from './Editor'
import {DiaryDispatchContext} from '../App'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const New = ()=>{
  const nav = useNavigate();
  const {onCreate} = useContext(DiaryDispatchContext);

  //버튼 전송 createdDate, emotionId, content
  const onSubmit = (input)=> {
    onCreate(input.createdDate, input.emotionId, input.content);
    //뒤로가기 방지
    nav("/",{replace:true})
  }
  return <>
    <div>
      <Header 
      leftChild={<Button text={"< 뒤로가기"} type={"POSITIVE"} onClick={(e)=> nav(-1)} />} 
      title={"새 일기 쓰기"} />

      <Editor onSubmit={onSubmit} />

    </div>
  </>
}
export default New;