
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import NotFound from './components/NotFound'
import Edit from './components/Edit'
import Diary from './components/Diary'

function App() {
  const nav = useNavigate(); // Link 기능과 같음. import 후 정의.
  const onClickGoPage = (e)=> {
    nav(`/${e.target.value}`)
  }


  return (

    <>
    {/* Routes 사이가 controller 영역 */}
    {/* 이곳에 적은 내용은 모든 페이지가 공통으로 사용. */}
    {/* React에선 앵커(herf)가 아닌 Link가 좋음. 페이지가 깜빡이지 않는다.(react-router-dom에서 제공하는.) */}
      <h2> <Link to={"/"}>HOME</Link> || <Link to={"/new"}>New</Link> || <Link to={"/diary"}>Diary</Link> || <Link to={"/edit"}>Edit</Link> </h2>
      <h2><a href="/">HOME</a> || <a href="/new">New</a> || <a href="/diary">Diary</a> || <a href="/edit">Edit</a><br /> </h2>
      <button value="/" onClick={onClickGoPage}>HOME</button>
      <button value="new" onClick={onClickGoPage}>New</button>
      <button value="diary" onClick={onClickGoPage}>Diary</button>
      <button value="edit" onClick={onClickGoPage}>Edit</button>

      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/new' element={ <New />}/>
        <Route path='/diary' element={ <Diary />}/>
        <Route path='/edit' element={ <Edit />}/>
        <Route path='/*' element={ <NotFound />}/>
      </Routes>
      
    </>
  )
}

export default App