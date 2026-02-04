// 1. 배열 순회 
let arr1 = [1, 2, 3]; 
 
for (let i = 0; i < arr.length; i++) { 
  console.log(arr[i]); 
} 
 
// 2 for of 반복문 
let arr2 = [1, 2, 3]; 
for (let item of arr) { 
  console.log(item); 
} 
 
// 3.1 객체 순회, Object.keys 사용 
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환 
let keys = Object.keys(person); 
 
for (let key of keys) { 
  const value = person[key]; 
  console.log(key, value); 
} 
 
// 3.2 Object.values 
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환 
let values = Object.values(person); 
 
for (let value of values) { 
  console.log(value); 
} 
 
// 4 for in 
for (let key in person) { 
  const  value = person[key]; 
  console.log(key, value); 
}