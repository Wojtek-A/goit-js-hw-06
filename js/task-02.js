const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((number, index) => {
  const item = document.createElement("li");
  item.textContent = ingredients[index];
  ingredientsList.append(item);
});
