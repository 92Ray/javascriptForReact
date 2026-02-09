import { useState } from "react";

const Bulb = ()=> {
   const [light,setLight]= useState('ON');

   const onLightClick = (e)=> {setLight(light === 'ON' ? 'OFF': "ON") }

  return <>
  <div>
    {light === 'ON' ? (
      <h1 style={{backgroundColor: 'red'}}>Bulb ON</h1>

    ):(
      <h1 style={{backgroundColor: 'blue'}}>Bulb OFF</h1>

    )}
   <button type="button" onClick={onLightClick}>
    {light === 'ON' ? '끄기': "켜기"}</button>
  </div>
  </>
}
export default Bulb;