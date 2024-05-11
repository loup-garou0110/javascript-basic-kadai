const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

console.log(today);

const todaysDate = () => {
  console.log(year);
  console.log(month);
  console.log(date);
}

console.log(year + "年" + (month + 1) + "月" + date + "日");