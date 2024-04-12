// 생성자 함수의 객체 생성 예시
//구분을 위해 대문자로 시작

//생성자 함수 Member는 세 개의 매개변수 id, name, age를 가진다
function Member(id, name, age) {
  //키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  //따라서 this.id 는 객체 자신의 프로퍼티 id를 의미
  this.id = id;
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `나의 이름은 ${this.name}`;
  };
}

const member1 = new Member("ljd", "이제동", 30);
let text = "";
text += `${member1.name} <br>`;
text += `${member1.id} <br>`;
text += `${member1.age} <br>`;
text += `${member1.getName()}`;

document.getElementById("show").innerHTML = text;
