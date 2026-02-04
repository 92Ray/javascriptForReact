// 내장함수 (반복문=>자기스타일로 변경)

/*
// 1. forEach 내장함수 활용
const arr=[1,2,3,4]; 
//화살표함수 
arr.forEach((e) => console.log(e)); 
//다른방법으로 표현하면 
arr.forEach(function(e){  
 console.log(e); 
});

Array.forEach((personValues, indexedDB, array)=>{
  console.log(`value = ${value}`)
  console.log(`value = ${value}`)
  console.log(`value = ${value}`)
});


// 2.현재배열을 2배로 하여 새로운 배열로 만들기
const arr2=[1,2,3,4]; 
const newArr2 = [];  
arr.forEach(function(elm){ 
 newArr.push(elm*2); 
}); 
console.log(newArr); 

// 3.똑같은 방법으로 간단하게 표현
const arr3=[1,2,3,4]; 
const newArr3 = arr.map((elm)=>{return elm * 2}); 
console.log(newArr);

// 4.배열속에 원하는 값이 있는지 찾기
const arr4=[1,2,3,4]; 
let number4 = 3;  
arr.forEach((elm)=>{ 
 if(elm === number){ 
 console.log(true); 
} 
}); 

// 5. 간단하게 표현하기 두 번째
const arr5=[1,2,3,4]; 
let number5 = 3;  
console.log(arr.includes(number)); //true 출력 

*/
/*
// filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let newArray1 = [];
for(let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if(item.hobby === "독서"){
    newArray1.push(item);
  }
}
console.log(array1);
console.log(newArray1);
*/


/*

find index

let array2 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 


filter
let newArray2 = array2.filter(item => item.hobby === "테니스");
array2.filter((value)=>{value.hobby === "독서"});

console.log(array2);
console.log(newArray2);
*/

// find는 찾는 이름이 여러 개더라도 첫 번째걸 찾으면 종료.
// filter는 찾는 이름이 여러 개라면 전부 걸러내서 찾아줌.

// const tennisPeople = arr1.filter( 
// (item) => item.hobby === "테니스" 
// ); 
// Console.log(tennisPeople);    
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.

//find
//기본으로 널주고
/*
let findItem = null;
for (let i = 0; i < array2.length; i++) {
  let item = array2[i];
  if(item.hobby === "테니스"){
    findItem = item;
    break;
  }
  //첫 번째 테니스만 찾고 break.
}
console.log(findItem);
*/

// ※ find나 index나 기본적인 구조는 같다.
/*
let findItem2 = array2.find((value)=>value.hobby === "독서");
index
let findIndex = array2.findIndex((value)=>value.hobby === "독서");
console.log(array2[findIndex]);

let indexOf = array2.indexOf((value)=>value.hobby === "독서"); - 이건 안됨
*/

// Slice 지정한 번호부터 자름 3번일 경우 0, 1, 2 만 남기고 3부터 자름.
/*
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "홍길동2", hobby: "게임" }, 
{ name: "홍길동3", hobby: "골프" }, 
{ name: "홍길동4", hobby: "독서" }, 
]; 

let newArray = array1.slice(3);
console.log(newArray);

*/

/*

Concat 합쳐서 출력하기!

let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let array2 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" },
]; 

let array3 = array1.concat(array2);
console.log(array3);

*/

/*
// 배열을 사전순으로 내림차순 정렬하는 메서드 
let array3 = [0,1,3,2,10,30,20]; 
let array4 = ["acd","dfs","eer","csd","aaa","vvd"]; 
 
array3.sort((num1, num2)=>{
  return num1-num2
})
array3.sort(array3)
 
//숫자정렬
//문자정렬
//array4.sort() 
//console.log(array4)
*/


const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined);

const arry7 = joined.split("==")
console.log(arry7);