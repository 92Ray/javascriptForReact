//함수호이스팅(함수선언, 함수표인식, 화살표하무)
let a;
console.log(a);

a = function getArea(width, height){
  height = height ?? 20;
  console.log(`함수선억식 width = ${width ?? 30} height=${height}`);
}
console.log(a);

// getArea(null, undefined);
//////////////////////////////////////////////////////////////////

let getArea;
console.log(a);

function getArea(width, height){
  height = height ?? 20;
  console.log(`함수선억식 width = ${width ?? 30} height=${height}`);
}
//console.log(a);

getArea(null, undefined);

