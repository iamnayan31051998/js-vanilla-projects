const book1 = document.getElementById("check1");
const book2 = document.getElementById("check2");
const book3 = document.getElementById("check3");
let total = document.getElementById("add");

function getTotal() {
  total.innerText = book1.value;
  console.log(total);
}
