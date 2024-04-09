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

```js
const member = {
  name: "홍길동",
  age: 30,
};

//Symbol()로 심볼 id 생성
let id = Symbol("id");
//객체 member 의 키 id에 문자열 "kdhong" 저장
//심볼 id가 객체의 키로 사용되면 심볼 데이터형은
//유일한 식별자이기 때문에 객체의 키 이름이 겹쳐서 충돌하는 경우 방지

member[id] = "kdhong";
//=member.id = "kdhong";

//객체 member에서 심볼 id 가 키로 사용된 요소는
// member[id]에 의해 접근 할 수 있다.
//심볼 id와 새롭게 생성된 Symbol("id")는 서로 다르다.
console.log(id == Symbol("id"));

//== 같냐? === 데이터 타입까지 같냐?
```

## 3.8 배열 array

- index는 0 부터 시작

```js
const car = ["현대", "기아", "벤츠", "BMW"];

console.log(car[0]);
```
