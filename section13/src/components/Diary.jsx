import Header from './Header'
import Button from './Button'
import Viewer from './Viewer'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { DiaryDispatchContext, DiaryStateContext } from '../App'


const Diary = ()=>{
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);
  const {onUpdate} = useContext(DiaryDispatchContext);

   // useState와 useEffect를 제거하고 useMemo로 대체
      const curDiaryItem = useMemo(()=>{
        return data.find((item)=>String(item.id) === String(params.id))
      }, [data, params.id]) // data나 id가 바뀔 때만 다시 계산

      // // 데이터 확인 및 리다이렉트 로직
      // useEffect(()=>{
      //   if (data.length < 0 && !curDiaryItem) {
      //     window.alert("존재하지 않는 일기입니다.")
      //     nav("/", {replace: true})
      //   }
      // }, [data, curDiaryItem, nav])

      // 데이터가 로드될 때까지 렌더링 방어
      if (!curDiaryItem) {
      return <div>데이터를 불러오는 중입니다...</div>;
    }

  return <>
    <Header 
      leftChild={<Button text={"< 돌아가기"} type={"POSITIVE"} onClick={()=> nav(-1)} />} 
      rightChild={<Button text={"수정하기"} type={"NEGATIVE"} />} 
      title={"일기"} />
    <Viewer emotionId={curDiaryItem.emotionId} content={curDiaryItem.content}/>
  </>
}
export default Diary;