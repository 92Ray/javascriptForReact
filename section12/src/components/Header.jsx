import '../css/Header.css'
import { memo } from 'react';




const Header = ({count})=> {
  console.log(`HEADER ${count}`)
  return <>
  <div className="Header">
    <h3>오늘은 달력📆</h3> 
    <h1>{new Date().toDateString()}</h1>
  </div>
  </>
}

const memonizedHeader = memo(Header);

export default memonizedHeader;