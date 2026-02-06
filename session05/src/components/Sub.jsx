import "../CSS/Sub.css"


const Sub = ()=> {
  
  const user = {name: 'wdg' , isLogin: true};

  if(user.isLogin === true){
    return <><h1 id="login">{user.name}로그아웃</h1></>
  }else{
    return<><h1 id="logout">{user.name}님, 로그인 해주세요.</h1></>
  }

};
export default Sub;