const main = document.getElementById("main");
const doubleBtn = document.getElementById("double");
const addUserBtn = document.getElementById("add-user");
const showMillionBtn = document.getElementById("show-millions");
const sortBtn = document.getElementById("sort");
const wealthBtn = document.getElementById("wealth");

let data = [];
getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function calculateWealth() {
  const wealth = data.reduce((acc, userMoney) => (acc += userMoney.money), 0);
  const wealthEle = document.createElement("div");
  wealthEle.innerHTML = `<h3>Total Wealth <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEle);
}

function showMillionairs() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });
  updateDOM();
}

function sortByRich() {
  data.sort((a, b) => {
    return b.money - a.money;
  });
  updateDOM();
}

function getDoubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Add The User
function addData(user) {
  data.push(user);
  updateDOM();
}

function updateDOM(provideData = data) {
  // Clear The Main Div
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";
  // Go Through Each Data Use ForEach()
  provideData.forEach((items) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${items.name}</strong> ${formatMoney(
      items.money
    )}`;
    main.appendChild(element);
  });
}

// Function to Format Money https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
function formatMoney(number) {
  return " ₹ " + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Add Event Listner
addUserBtn.addEventListener("click", getRandomUser);
// Double Money
doubleBtn.addEventListener("click", getDoubleMoney);
// Sort Btn
sortBtn.addEventListener("click", sortByRich);
// Show Millionare
showMillionBtn.addEventListener("click", showMillionairs);
// Calculate Wealth
wealthBtn.addEventListener("click", calculateWealth);
