const inputEl = document.querySelector("input");
const renderBtn = document.querySelector("[data-action=render]");
const destroyBtn = document.querySelector("[data-action=destroy]");
const divEl = document.querySelector("#boxes");

inputEl.addEventListener(`input`, quontityElement);
let amount = 0;
function quontityElement(event) {
  amount = event.currentTarget.value;
}
console.log(amount);
renderBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);
function createBoxes(quontityElement) {
  let w = 20;
  let h = 20;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement(`div`);
    w += 10;
    h += 10;
    divBox.style.width = `${w}px`;
    divBox.style.height = `${h}px`;
    divBox.style.backgroundColor = `${`rgb(2${i * 2},1${i + 1}0,16${i + 2})`}`;
    console.log(divBox);
    divEl.appendChild(divBox);
  }
  ``;
  return divEl;
}
console.log(divEl);
function destroyBoxes(quontityElement) {
  for (let i = 0; i < amount; i++) {
    divBox.remove();
  }
}
