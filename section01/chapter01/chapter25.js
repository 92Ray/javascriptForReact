// 구조분해할당 (배열, 분해, 변수할당)
let array = [1,2,3];
let one = array[0];
let two = array[1];
let three = array[2];
//이게 기본형이지만 불편해서 바뀌게 됨.

let[_one, _two, _three = 10, four = 4] = array;
console.log(_one)
console.log(_two)
console.log(_three)
console.log(four)
// 값이 있으면(3) 3이 찍히고, 없으면 직접 지정해놓은 10이 찍힘

// 구조분해할당 (객체, 분해, 변수할당)
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
};
let person3 = person;
console.log(person3 === person);

let person2 = {
  age : myAge,
  name,
  hobby,
  extra = "hi, there."
} = person;

console.log(myAge, name, hobby, extra);