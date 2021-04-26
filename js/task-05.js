const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener(`input`, insertTextWithInput);
const textGreeting = `незнакомец`;
function insertTextWithInput() {
  if (inputEl.value !== ``) {
    return (spanEl.textContent = inputEl.value);
  }
  spanEl.textContent = textGreeting;
}
