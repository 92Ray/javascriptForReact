import { getEmotionImage } from "../util/get-emotion-image";
import "./Viewer.css"; 
import { useContext } from 'react';
import { useParams } from 'react-router-dom'

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Viewer = ()=> {
  const emotionId = 1;
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));
  const data = userContext(DiaryStateContext);
  const params = useParams();

  const curDiaryItem = useMemo()
  return<>
   <div className="Viewer"> 
      <section className="img_section"> 
        <h4>오늘의 감정</h4> 
        <div className="emotion_img_wrapper"> 
          <img src={getEmotionImage(1)} /> 
          <div>{emotionItem.emotionName}</div> 
        </div> 
      </section> 
      <section className="content_section"> 
        <h4>오늘의 일기</h4> 
        <div className="content_wrapper"> 
          <p>일기….</p> 
        </div> 
      </section> 
    </div> 
  </>
}

export default Viewer;
