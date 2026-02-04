//콜백함수
function repeat(count, callback){
  for (let index = 0; index < count; index++) {
    //콜백함수를 진행.
  }
}

// 함수표현식
let funcA = function (index){
  console.log(index);
}
repeat(5, funcA);
//5가 count로, funcA가 callback으로
//let callback = funcA; 와 완전히 같음.

let funcB = function (index){
  console.log(index*10);
}
repeat(5, funcA);

let funcC = function (index){
  console.log(index*10+5);
}
repeat(5, funcA);
// let callback = funcA

repeat(5, funcC);


// 화살표함수
let funcA = (index)=> console.log(index);
let funcB = (index)=> console.log(index*10);
let funcC = (index)=> console.log(index*10+5);
-
repeat(5, (index)=> console.log(index));
repeat(5, (index)=> console.log(index*10));
repeat(5, (index)=> console.log(index*10+5));


// 복수의 인덱스를 처리할 경우
function repeat(count, callback){
  for (let index = 0; index < count; index++) {
      callback(index, index);
  }
}
repeat(5, (index1, index2)=> console.log(index1+index2));


// 콜백함수의 활용 
function repeat(count, callback) { 
for (let idx = 1; idx <= count; idx++) { 
callback(idx); 
} 
} 
repeat(5, (idx) => { 
console.log(idx); 
}); 
repeat(5, (idx) => { 
console.log(idx * 2); 
}); 
repeat(5, (idx) => { 
console.log(idx * 3); 
}); 



