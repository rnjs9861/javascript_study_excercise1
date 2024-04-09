const scores = [88, 75, 95, 90];

for (let score of scores) {
  console.log(score);
}
//밑은 실행이 안됨. 왜냐면 score 이 위 for 문 안에서 만들어져서 그 outside 접근 불가
console.log(score);
