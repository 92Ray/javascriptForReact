 const Sub2 = ()=> {
  
  const user = {name: 'wdg' , isLogin: true};

  // if문은 들어가지 안혹 삼항연산자는 ok
  return<>
  {user.isLogin === true ? (<div>{user.name}로그아웃</div>) : (<div>{user.name}로그인</div>)}

  </>

};
export default Sub2;