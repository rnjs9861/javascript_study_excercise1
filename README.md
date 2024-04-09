# 4. 연산자

- 산술연산자
- 할당연산자
- 비교연산자
- 논리연산자

## 4.1 산술연산자

```txt
+
-
*
/
% 나머지 계산
** 거듭제곱 계산
++ 1증가
-- 1감소
```

## 4.2 할당연산자

- 할당(assignment) 연산자는 데이터나 변수 값을 변수에 저장, 즉 메모리 공간에 할당하는 역할

```js
let a = 10,
  b = 20,
  c = 30,
  d = 40,
  e = 50;

//둘이 같다
//a = a + 3; //13
a += 3; //13

b -= 8; // 12
c *= 3; // 90
d /= 10; //4
e %= 6; //2
console.log(e);

let f = "안녕";
f += " 하세요";

console.log(f);
```

```js
let username = "이제동";
let tel = "010-3043-0234";
let age = 30;

let text = "";

text += "<table border=1>";
text += "<tr><th>이름</th><th>전화번호</th><th>나이</th></tr>";
text += "<tr><td>" + username + "</td></tr>";
text += "</table>";

document.write(text);
```

### 4.3 비교연산자

```js
let a = 3,
  b = "3",
  c = 5,
  d = 3;
console.log(a == b); // true 같다
console.log(a === b); // false 데이터 타입까지 같냐? no
console.log(a != b); //false 다르냐? -> no 같아
console.log(a !== b); // true 데이터 타입까지 다르냐? yes
console.log(a > c); // false
console.log(a < c); // true
console.log(a >= c); // false
console.log(a <= c); // true
```

## 4.4 논리연산자

- && : AND 두 조건이 모두 true 일 경우에만 최종 결과 true 반환
- || : OR 두 조건 중 하나만 true가 되어도 최종결과 true
- ! : NOT 결과가 true인 경우 false, 반대로 false인 경우 true
