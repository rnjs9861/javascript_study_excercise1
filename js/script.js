//전역 스코프
let x = 10;
function fnc() {
  console.log(x);
}
fnc();
console.log(x);

// 함수 스코프
function fnc1() {
  let y = 11;
  console.log(y);
}

fnc1();
console.log(y); // 지역 변수 y로 접근 못함
