const inputEl = document.querySelector("input");
const renderBtn = document.querySelector("[data-action=render]");
const destroyBtn = document.querySelector("[data-action=destroy]");
const divEl = document.querySelector("#boxes");
inputEl.addEventListener(`input`, quontityElement);
let amount = 0;
function quontityElement(event) {
  amount = event.currentTarget.value;
}

renderBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);
function createBoxes(quontityElement) {
  let change = 20;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement(`div`);
    change += 10;
    divBox.style.width = `${change}px`;
    divBox.style.height = `${change}px`;
    divBox.style.backgroundColor = `${`rgb(1${change},${change},${change})`}`;
    divEl.appendChild(divBox);
  }
}
console.log(divEl);
function destroyBoxes(quontityElement) {
  for (let i = 0; i < amount; i++) {
    const divDel = document.querySelector("#boxes div");
    divDel.remove();
  }
}
