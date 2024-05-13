// btnというidを持つHTML要素を取得し、定数に代入する
const button = document.getElementById("btn");
// textというidを持つHTML要素を取得し、定数に代入する
const texts = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener("click", () => {
  const childtext = document.createElement("h2");
  childtext.textContent = "ボタンをクリックしました";
  texts.appendChild(childtext);
});