// 1. spread 연산자
let array1 = [] // 배열 [] 을 통해 만드는 방법
let array2 = new Array() //생성자로 만드는 방법

let array3 = [1,2,3,4,5,6,7,8,9]
let array4 = [10, ...array3, 20, 30]
let array5 = array3; // 얕은 복사
//힘 영역에 존재하는 데이터를 array3,5가 동시에 연결하고 있는 것.
//반대로 깊은 복사는 힘 영역에 같은 내용의 데이터가 2개 존재하는 것
let array6 = []
array3.forEach(value => {
  array6.push(value);
});

console.log(array6 === array3);
// -> false로 나옴. 데이터는 같지만 "복사"는 아닌 상태.

let array7 = array3.map((value)=>value < Infinity);
console.log(array7 === array3);
// 깊은 복사1 , 이게 A급이라고 함...?

let array8 = [...array3]
console.log(array8 === array3);
// 깊은 복사2 , 매우 간단

// 2. 객체(spread 연산자 활용) 깊은 복사.

let obj1 = {
  a: 1,
  b: 2
};
let obj2 = obj1
console.log(obj2 === obj1);

let obj3 = {
  k: 10,
  ...obj1,
  c:4,
  d:5
}
console.log(obj3);

// 3. 구조분해 할당, 스프레드 연산자
function funcA([p1,p2,p3,p4,p5,p6,p7,p8,p9]){
  console.log(p1+10,p2*10,p3/10,p4,p5,p6,p7,p8,p9);
}
const array9 = [1,2,3,4,5,6,7,8,9]
funcA(array9);

// 3.1 스프레드(...) 연산자
function funcB([p1,p2,p3,p4,p5,p6,p7,p8,p9]){
  console.log(p1+10,p2*10,p3/10,p4,p5,p6,p7,p8,p9);
}
const array10 = [1,2,3,4,5,6,7,8,9]
funcA(...array10);

// 4. rest 매개변수
const array11 = [11,12,13]
function funcC(p1,p2, ...rest){
  console.log(p1),
  console.log(rest)
}
funcC(...array11);