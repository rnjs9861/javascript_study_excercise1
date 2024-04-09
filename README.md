# 8. for 문

## 8.1 for 문

- 특정 코드를 반복해서 실행 for, while, do while

```txt
for(초기값; 조건식; 증가_감소;){
  문장;
  ...
}
```

```js
let num = 9;

if (num % 2 == 0) {
  console.log(`${num}은(는) 짝수입니다`);
} else {
  console.log(`${num}은(는) 홀수입니다`);
}

// 70점 이상이면 합격, 그렇지 않으면 불합격
let score = 65;
let result = "";

if (score >= 70) {
  result = "합격";
} else {
  result = "불합격";
}
console.log(result + "입니다");
```

## 8.2 for in 문

- 객체의 요소들을 반복해서 읽어올 때 for in

```js
// 객체 내 각 요소들을 반복해서 읽어라
// 그 키를 변수에 저장하는 식으로
// 반복 루프가 진행
for (변수 in 객체) {
  문장;
  ...
}
```

```js
// for의 조건식이 참인 동안 문장들을 반복실행
// 1. i의 값을 1로 초기화
// 2. 조건식 1 <= 3 참, 1출력
// 3. i의 값이 1 증가
// 4. i의 값이 2가 됨
// 5. 조건식 2 <= 3 참, 2출력
// 6. i의 값이 1 증가
// 7. i의 값이 3이 됨
// 8. 조건식 3 <= 3 참, 3 출력
// 9. i의 값이 1 증가
// 10. i의 값이 4가 됨
// 11. 조건식 4 <= 3 거짓, for 루프를 빠져나감

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// for 문을 이용해서 1 ~ 10 정수의 합계를 구하는 프로그램
let sum = 0;
// i가 1에서 100 까지 값을 가지는 동안
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// sum의 값을 출력
console.log(sum);

// for문, 배열, 템플릿 문자열 이용하여 웹페이지 글자에 색을 설정
const color = ["red", "green", "blue", "pink"];

let text = "";

// i는 0, 1, 2, 3의 값을 가지는 동안
for (let i = 0; i <= 3; i++) {
  // 템플릿 문자열을 이용
  text += `<span style="color: ${color[i]}">안녕</span>`;
}

console.log(text);
document.write(text);
```

```js
const member = { id: "kdhong", username: "홍길동", age: 30 };

//객체의 요소 수 만큼, 즉 세번 반복 루프 진행
for (let x in member) {
  console.log(member[x]);
}
```

## 8.3 for of 문

```js
for (변수 of 배열) {
  문장;
}
```

```js
const scores = [88, 75, 95, 90];

for (let score of scores) {
  console.log(score);
}
//밑은 실행이 안됨. 왜냐면 score 이 위 for 문 안에서 만들어져서 그 outside 접근 불가
console.log(score);
```
