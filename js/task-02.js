const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const nameEl = document.querySelector("#ingredients");
const addProductList = (product) => {
  return product.map((name) => {
    const produktNameEl = document.createElement("li");
    produktNameEl.textContent = name;
    return produktNameEl;
  });
};
const element = addProductList(ingredients);
nameEl.append(...element);
