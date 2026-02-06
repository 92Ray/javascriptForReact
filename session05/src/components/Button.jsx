import "../CSS/Sub.css"

const Button = ({text, color='black', children})=> {
  // 이벤트처리기능 핸들러함수(3가지: 함수선언, 함수표현, 화살표함수)
  const onClickButton = (e)=>{
    alert(`${text} + ${color}`)
    // 매우 중요!
    console.log(e);
  }

  return<>
    <button onClick={onClickButton} style={{color: color}} type="button">{text}-{color.toUpperCase()}{children}</button>
  </>

};
export default Button;


/*
const Button = (props)=> {
  //여기서 props를 통해 키값:밸류값 들이 들어옴.
  return <>
    <button style={{color: props.color}} type="button">{props.text}-{props.color.toUpperCase}</button>
  </>
};
export default Button;

이건 prop방식.
버튼 하나하나마다 일일히 줘야 하기 때문에 번거롭다.
*/
