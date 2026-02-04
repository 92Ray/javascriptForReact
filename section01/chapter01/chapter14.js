//1. 객체생성
let object1 = {}
let object2 = new Object{};
console.log(object1);
console.log(object2);
// 사실상 두 개가 같음.

let person = {
  name: "홍길동",
  age: 30,
  hobby: "축구",
  job: "Developer",
  extra: {},
  extra2: function (){},
  "like cat": true
};
console.log(person);
delete person.job;
console.log(person);
//delete로 멤버변수를 중간에 삭제하는 것조차 가능.

let person2 = {
  name: "홍길동",
  age: 30,
  hobby: "축구",
  job: "Developer",
  extra: {},
  extra2: function (){},
  "like cat": true
};
let result = "name1" in person2;
console.log(result);
person.nation = "한국";
console.log(person2);
//이러면 멤버변수에 nation이 추가된다.

// ----------------------------------------------------------------------------------------------- //

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {};          // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "홍길동",
  age: 30,
  hobby: "축구",
  job: "Developer",
extra: {},   //객체도 들어올수 있음
extra2: function () {},  //함수도 들어올수 있음
  "like cat": true,  //한칸띄는 변수가 있으면 “” 
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 대괄호 표기법)
let name = person.name;
let age = person["age2"];  //존재하지 않는 변수가 나오면 undefind 저장한다.

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);




