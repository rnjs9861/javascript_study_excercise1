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

console.log(!a == b); //true
