const controls = [
  ["Clear", "Backspace", "Delete"],
  ["+/-", "~"],
  ["^"],
  ["/"],
  ["7"],
  ["8"],
  ["9"],
  ["*"],
  ["4"],
  ["5"],
  ["6"],
  ["+"],
  ["1"],
  ["2"],
  ["3"],
  ["-"],
  ["0"],
  ["."],
  ["Enter", "="],
];

let buttonsArray = [];

const btnBin = document.getElementById("button__container");

for (const group of controls) {
  let btn = document.createElement("button");
  btn.classList.add("button");
  btn.textContent = group[0]; // first element is the name of the button
  if (group[0] === "0") btn.style.cssText = "flex: 50%;";
  else btn.style.cssText = "flex: 25%;";
  btn.addEventListener("click", updateDisplay);
  btnBin.appendChild(btn);
  buttonsArray.push([btn, group]);
}

function updateDisplay() {
  this.focus();
  // const input = this.textContent;
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  for (const element of buttonsArray) {
    if (element[1].includes(event.key)) element[0].click(); // first element is the object to click second element if the array of ways to press this button
  }
});
