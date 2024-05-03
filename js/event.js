let text = "";

const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  text += "안녕하세요!<br>";
  document.getElementById("show").innerHTML = text;
});

btn.addEventListener("click", function () {
  text += "반갑다!<br>";
  document.getElementById("show").innerHTML = text;
});
