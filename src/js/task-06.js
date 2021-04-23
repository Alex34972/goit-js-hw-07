const inputEl = document.querySelector("#validation-input");
const inputLengthText = inputEl.dataset.length;
inputEl.addEventListener(`blur`, controlInput);

function controlInput(event) {
  if (event.currentTarget.value.length != inputLengthText) {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  } else {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  }
}
