// 1. 날짜를 생성하는 방법
let date1 = new Date();
let timeValue = date1.getTime()
console.log(timeValue);
console.log(date1);

// 2. 사용자가 날짜를 설정하는 방법
let date2 = new Date(1992,6-1,30,7,30,10);
let timeValue2 = date2.getTime();
console.log(timeValue2);
console.log(date2);

// 3. 상대방에게 getTime()주게되면, 날짜로 복구가능한가?
let date3 = new Date(timeValue);
console.log(`date3 = ${date3}`);

// 4. 날짜 : 추출(년도, 월, 일, 시간, 분, 초)
// 5. 날짜 : 수정(년도, 월, 일, 시간, 분, 초)
let date4 = new Date();
date4.setFullYear(2025)
date4.setMonth(-1)
date4.setDate(4)
date4.setHours(17)
date4.setMinutes(26)
date4.setSeconds(1)
console


let year = date4.getFullYear();
let month = date4.getMonth() + 1; 
let date = date4.getDate();
let hour = date4.getHours();
let minute = date4.getMinutes();
let sceond = date4.getSeconds();
let millisecond = date4.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(minute);
console.log(sceond);
console.log(millisecond);

// 6.시간은 제외하고, 날짜만 출력하기
let date5 = new Date();
console.log(date5.toDateString());

// 7.현재지역 시간을 출력하기
console.log(date5.toLocaleDateString());