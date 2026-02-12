
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import NotFound from './components/NotFound'
import Edit from './components/Edit'
import Diary from './components/Diary'
// import emotion1 from './assets/emotion1.png'
// import emotion2 from './assets/emotion2.png'
// import emotion3 from './assets/emotion3.png'
// import emotion4 from './assets/emotion4.png'
// import emotion5 from './assets/emotion5.png'
// assets의 이미지는 임포트를 해야 가져올 수 있음 아주아주아주 번거로움
import { getEmotionImage } from './util/getEmotionImage'
// 위의 것들을 getEmotionImage로 모은 것.

function App() {


  return (

    <>
      {/* 공통부분 */}
      <h2>public img</h2>
      <img src="/emotion11.png"/>
      <img src="/emotion12.png"/>
      <img src="/emotion13.png"/>
      <img src="/emotion14.png"/>
      <img src="/emotion15.png"/>

      <h2>assets img</h2>
      <img src={getEmotionImage(1)}/>
      <img src={getEmotionImage(2)}/>
      <img src={getEmotionImage(3)}/>
      <img src={getEmotionImage(4)}/>
      <img src={getEmotionImage(5)}/>
      
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/new/:id' element={ <New />}/>
        <Route path='/diary' element={ <Diary />}/>
        <Route path='/edit' element={ <Edit />}/>
        <Route path='/*' element={ <NotFound />}/>
      </Routes>
      
    </>
    )
}

export default App