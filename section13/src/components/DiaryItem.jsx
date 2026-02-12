import getEmotionImage from "../util/getEmotionImage.js"
import Button from "./Button"
import './DiaryItem.css'
import { useNavigate } from "react-router-dom"

const DiaryItem = ({id, emotionId, createdDate,content}) => {
  const nav = useNavigate();

  return<>
  <div className="DiaryItem">
    <div className="img_section" onClick={()=>nav(`/diary/${id}`)}>
      <img src={getEmotionImage(emotionId)} alt="강점이미지" />
    </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">
          {content}
        </div>
        <div className="button_section">
        </div>
      </div>
          <Button text={"수정하기"} onClick={()=>nav(`/edit/${id}`)}/>
  </div>

  </>

}

export default DiaryItem