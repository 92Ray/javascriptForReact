// 1. 사용자 정의 객체
let object1 = {name : "홍길동", age: 30}

let object2 = {...object1};
object2.hobby = "테니스"
console.log(object2)
//false가 나와야 깊은복사가 맞음
console.log(JSON.stringify(object1) === JSON.stringify(object2))