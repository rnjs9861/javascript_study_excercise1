# 3. 데이터형(Data Type)

- number : 숫자
- string : 문자열
- boolean : true? or false?
- null
- undefined
- Bigint
- object 객체
- symbol

## 3.1 숫자 number

```js
const a = 3; // 정수(integer)
const b = 5.7; // 부동 소수점 숫자 (floating point number)
const c = 123e3; // 123000
const d = 123e-3; // 0.123

console.log(d);
```

## BigInt

- 정수는 15개의 숫자, 15자리 정수까지 나타낼수 있다.
- 그 이상의 정수를 사용하려면 Binint 형 사용해야한다.

```js
const e = 99999999999999999998777777n;
console.log(e);
```

## 문자열 string

```js
// 템플릿 문자열 ``

let username = "이제동";
let age = 27;

let text2 = "이름:" + username + "   나이:" + age;
console.log(text2);

let text3 = `이름: ${username}, 나이: ${age}`;
console.log(text3);
```

## boolean

```js
let x = 5 > 3;
let y = 5 < 3;

console.log(x, y);
```

## undefined, null(빈 문자열)

```js
let x;
console.log(x);

let y = "";
console.log(typeof y);
```

## 객체 object

```js
const user = {
  id: "kdh",
  name: "홍길동",
  age: 24,
};

console.log(user.id);
```

## 심볼 symbol

- number, string, boolean과 같은 원시데이터
- 유일한 식별자로서 객체의 속성을 추가하는데 사용
