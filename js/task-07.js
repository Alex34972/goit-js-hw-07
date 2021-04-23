const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputEl.addEventListener(`change`, removeSizeText);
function removeSizeText(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}.px`;
}
