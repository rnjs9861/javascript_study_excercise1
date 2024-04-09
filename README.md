# 6. if 문

## 6.1 if ~ 구문

- 참, 거짓에 따라 특정 코드의 실행을 제어

```
if(조건식){
  문장;
  ...
}
```

## 6.2 if ~ else ~ 구문

```txt
if(조건식){
  문장;
  ...
} else {
  문장;
  ...
}

```

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

```

## 6.2 if ~ else if ~ else 구문

## 7. switch 문

- if문과 거의 같은 방식으로 동작

```js
// 괄호 안에 있는 변수으 ㅣ값에 따라
switch (변수) {
  //해당 case에 있는 문장들이 실행
  case 값1:
    문장; //값이 1이면 문장을 실행하라!
    break; //그리고 나가라!
  case 값2:
    문장;
    break;

  default: //이 모든 케이스에 해당되지 않는다면 default(초깃값) 를 반환하라
    문장;
}
```
