const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener(`input`, insertTextWithInput);
function insertTextWithInput() {
  spanEl.textContent = inputEl.value;
}
