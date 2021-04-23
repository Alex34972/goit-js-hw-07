const categoriEl = document.querySelector("#categories");
const numberOfCategories = categoriEl.children.length;
console.log(`В списке ${numberOfCategories} категории.`);

const categoriNameEl = document.querySelectorAll("h2");
const quantityEl = document.querySelectorAll(".item ul");
categoriNameEl.forEach((element, i) => {
  console.log(`Категория:${element.textContent}`);
  console.log(`Количество элементов:${quantityEl[i].children.length}`);
});
