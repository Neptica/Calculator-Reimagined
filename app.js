// the first string is the text that will show per button and any remaining will be viable for button presses to activate the associated button
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

// Create all buttons with their associated clicks and store them in the buttonsArray for later usage
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

// update the display after a button event
function updateDisplay() {
  this.focus();
  // const input = this.textContent;
}

// listen for button presses everywhere on the webpage and click the associated button
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  for (const element of buttonsArray) {
    if (element[1].includes(event.key)) element[0].click(); // first element is the object to click second element if the array of ways to press this button
  }
});
