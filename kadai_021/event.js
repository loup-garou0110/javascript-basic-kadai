// btnというidを持つHTML要素に定数を代入
const btn = document.getElementById("btn");
//textというidを持つHTML要素に定数を代入
const text =document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent="ボタンをクリックしました";
  },2000);
});