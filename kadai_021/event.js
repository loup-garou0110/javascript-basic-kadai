// btnというidを持つHTML要素に定数を代入
const button = document.getElementById("btn");
//textというidを持つHTML要素に定数を代入
const txt =document.getElementById("text");

button.addEventListener("click", () => {
  setTimeout(() => {
    const childtxt = document.createElement("h2");
    childtxt.textContent="ボタンをクリックしました";
    txt.appendChild(childtxt);
  },2000);
});