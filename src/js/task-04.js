const decrementBtnEl = document.querySelector("[data-action=decrement]");
const incrementBtnEl = document.querySelector("[data-action=increment]");
let counterValue = 0;
const counterValueEl = document.querySelector("#value");
const decrementBtnElClickHandler = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
const incrementBtnElClickHandler = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};
decrementBtnEl.addEventListener(`click`, decrementBtnElClickHandler);
incrementBtnEl.addEventListener(`click`, incrementBtnElClickHandler);
