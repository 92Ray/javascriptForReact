// 동기와 비동기

/*
console.log(1)
// setInterval - 3초마다 끊임없이 불러옴.
// setTimeout - 3초가 끝나면 끝.
setTimeout(()=>{
  console.log(2)
}, 3000);
//비동기. web-api에게 일임. 3초 뒤에 2를 실행함.
console.log(3)
*/


//함수 선언식
/*
function task(a, b) {
  setTimeout(()=>{
    let sum = a + b;
  console.log(`a + b = ${sum}`)
}, 3000);}
task(10, 20);
*/

/*
function task(a, b, callbackA) {
  setTimeout(()=>{
    let sum = a * b;
    callbackA(sum);
  }, 1000);}

task(70, 10000, (sum)=> console.log(sum*400));

// 1. 함수 정의: 계산해서 값을 '반환'만 함
function calculate(a, b) {
  return a * b;
}
// 2. 사용: 결과값을 변수에 저장하고 필요한 계산을 이어서 함
const sum = calculate(70, 10000);
console.log(sum * 400); // 정산 완료

function task2(a,b,callback){
  setTimeout(()=>{
    callback(a,b);
  },3000);
}
task2(100, 200, (a,b)=>console.log(`a+b = ${a+b+1000}`))

*/

// 1단계 음식을 주문하는 상황
// 이벤트: 음식을 주문하면 3초 후에
// 핸들러: 음식이 완성이 되어 나오는 것.
function orderFood(food, callback){
  console.log(`${food}가 주문되었습니다.`);
  setTimeout(()=>{
    callback(food);
  }, 3000)
}
//orderFood("떡볶이", (food)=> console.log(`소영이가 좋아하는 ${food}가 완성`))
// 1단계 컴플레인 요청
function coolFood(food, callback){
  console.log(`${food} 차갑게 요청.`);
  setTimeout(()=>{
    callback(food);
  }, 3000)
}
coolFood("떡볶이", (food)=>console.log(`${food}를 식혀왔습니다.`))