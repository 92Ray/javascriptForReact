
/*

function task(){
  setTimeout(()=>{
    console.log("안녕");
  }, 3000);
}
task();

let promis = new Promise(()=>{
  setTimeout(()=>{
    console.log("안녕");
  }, 3000);
})

console.log(promis);

*/
/*
// console.log(promis);
// resolve상태
let pormis2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.timeLog("안녕");
    if(true){
      resolve("promis 안녕")
    }else{
      //reject 상태
    }
  }, 2000);
})
console.log(promise2);


let pormis2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.timeLog("안녕3");
    if(true){
      resolve("promis 안녕")
    }else{
      reject("promise 실패"); 상태
  }
}, 2000);
})
setTimeout(()=>{
  console.log(promise2);
}, 3000);

*/
/*

// 4. Promise를 실제로 활용해보자
let promise4 = new Promise((resolve, reject)=>{
  //비동기 작업 실행하는 함수
  // executor
  setTimeout(()=>{
    const num = "10";
    if(typeof num === 'number') {
      resolve(num + 10);
    }else{
      reject('num이 숫자가 아닙니다.'); 상태
  }
}, 2000);
});
setTimeout(()=>{
  console.log(promise4);
}, 3000);

*/
/*
// 성공한 후 결과값을 출력한다.
let promise5 = new Promise((resolve, reject)=>{
  //비동기 작업 실행하는 함수
  // executor
  setTimeout(()=>{
    const num = 10;
    if(typeof num === 'number') {
      resolve(num + 10);
    }else{
      reject('num이 숫자가 아닙니다.');
  }
}, 2000);
});
promise5.then((value)=> console.log(`성공한결과 ${value}`));
//setTimeout까지 추가하면 fullfilld 상태.
setTimeout(() => {
  console.log(promise5);
}, 3000);
*/

/*
let promise6 = new Promise((resolve, reject)=>{
  //비동기 작업 실행하는 함수
  // executor
  setTimeout(()=>{
    const num = 10;
    if(typeof num === 'number') {
      resolve(num + 10);
    }else{
      reject('num이 숫자가 아닙니다.');
  }
}, 2000);
});
// promise chain 방식으로 표현한다.
promise6
  .then((value)=> console.log(`성공한결과 ${value}`))
  .catch((value)=> console.log(`실패한결과 ${value}`));

  setTimeout(()=>{
    console.log(promise6)
  }, 3000);
*/
/*
function add10(num){ 
let promise = new Promise((resolve, reject)=>{
  //비동기 작업 실행하는 함수
  // executor
  setTimeout(()=>{
    if(typeof num === 'number') {
      resolve(num + 10);
    }else{
      reject('num이 숫자가 아닙니다.');
  }
}, 2000);
});
return promise
}
let promise = add10(100);

// promise chain 방식으로 표현한다.
promise
  .then((value)=> console.log(`성공한결과 ${value}`))
  .catch((value)=> console.log(`실패한결과 ${value}`));
*/
/*
  //2단계
  let promise = add10("100");
  promise
  .then((value)=>{
    console.log(`성공한결과 ${value}`)
    let _promise = add10(value)
    _promise.then((value)=>{
      console.log(`성공한결과 ${value}`)
    });
  })
  .catch((value)=> console.log(`실패한결과 ${value}`));

*/

/*
  //2단계 수정

let promise = add10("100");
  promise
  .then((value)=>{
    console.log(`성공한결과 ${value}`)
    //promise 리턴
    return add10(value);
  })
  .then((value)=> console.log(`성공한결과 ${value}`))
  .catch((value)=> console.log(`실패한결과 ${value}`));

  */
/*
 //3단계 수정
add10(100)
  .then((value)=>{
    console.log(`성공한결과 ${value}`)
    //promise 리턴
    return add10(value);
  })
  .then((value)=> {
    console.log(`성공한결과 ${value}`)
    return add10(undefined)

})
  .catch((value3)=> console.log(`실패한결과 ${value3}`))
  .catch((value)=> console.log(`실패한결과 ${value}`));
*/

  //음식주문사항을 1단계, 2단계, 3단계로 해결하시오.

 function orderFood(food, callback){
  console.log(`${food}가 주문`);
  setTimeout(()=>{
    callback(food)
  }, 3000);
 }

 function orderFood2(food){
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food}가 주문`);
    setTimeout(()=>{
      let flag = true;
      if(flag){
        resolve(food + `음식완료`)
      }else{
        reject(food+ `실패`)
      }
    }), 2000
  });
 return promise;
 }
// coolFood2('백숙') 
//   .then((value) => { 
//     console.log(value); 
//   }) 
//   .catch((error) => { 
//     console.log(error); 
//   }); 
 
// 1단계 음식을 냉동주문하는 상황 
function freezeFood2(food) { 
  const promise = new Promise((resolve, reject) => { 
    // 비동기 작업 실행하는 함수 
    // executor 
    setTimeout(() => { 
      console.log(food + '냉동주문'); 
      let flag = true; 
      if (flag === true) { 
87 
 
        resolve(food + '냉동완료'); 
      } else { 
        reject(food + '냉동미완료'); 
      } 
    }, 3000); 
  }); 
 
  return promise; 
} 
 
// freezeFood2('백숙') 
//   .then((value) => { 
//     console.log(value); 
//   }) 
//   .catch((error) => { 
//     console.log(error); 
//   }); 
 
//2단계 음식주문 => 차게주문 
// orderFood2('백숙') 
//   .then((value) => { 
//     console.log(value); 
//     return coolFood2('백숙'); 
//   }) 
//   .then((value) => { 
//     console.log(value); 
//   }) 
//   .catch((error) => { 
//     console.log(error); 
//   });

 //3단계 음식을 주문하고  => 음식을 차게주문사항 => 음식얼게 주문사항 
orderFood2('백숙') 
  .then((value) => { 
    console.log(value); 
    return coolFood2('백숙'); 
  }) 
  .then((value) => { 
    console.log(value); 
    return freezeFood2('백숙'); 
  }) 
  .then((value) => { 
    console.log(value); 
  }) 
  .catch((error) => { 
    console.log(error); 
  }); 

  //------------------페이커 로직-----------------------//
  evaluateFaker()
  .then((grade) => {
    // 1단계: 라인전을 이겼는가?
    if (!lineWin()) return grade; // 탈락 아님, 여기까지의 평가
    return "소상혁";
  })
  .then((grade) => {
    // 2단계: CS / 골드를 리드하였는가?
    if (!csGoldLead()) return grade;
    return "중상혁";
  })
  .then((grade) => {
    // 3단계: 로밍으로 팀적인 이득을 보았는가?
    if (!roamingImpact()) return grade;
    return "대상혁";
  })
  .then((grade) => {
    // 4단계: 메타 지배력
    if (!metaDomination()) return grade;
    return "고전파";
  })
  .then((finalGrade) => {
    console.log("최종 평가:", finalGrade);
  })
  .catch((err) => {
    console.log("평가 불가:", err);
  });

  // --------------------------------------------------------//