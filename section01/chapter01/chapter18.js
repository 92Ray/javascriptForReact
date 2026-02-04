// 방법1 
function returnFalse() { 
console.log("Fasle 함수"); 
return false; 
} 
 
function returnTrue() { 
console.log("True 함수"); 
return true; 
} 
 
console.log(returnTrue()|| returnFalse()); 
console.log(returnTrue()&& returnFalse()); 
 
// 방법2 
function returnFalse() { 
console.log("Fasle 함수"); 
return undefined; 
} 
 
function returnTrue() { 
console.log("True 함수"); 
return 10; 
} 
 
console.log(returnFalse() && returnTrue()); 
 
// 단락 평가 활용 사례 
function printName(person) { 
  const name = person && person.name; 
  console.log(name || "person의 값이 없음");
  } 
 
printName();                  // 출력: person의 값이 없음  
printName({ name: "홍길동" }); //출력: 홍길동 
 
// 조건문에서 false 로 인정되는 것(기본 디폴트값 5종류 + Not a Number 1종류 총 6종류) 
// undefined , null , 0 , false , "" , NaN

