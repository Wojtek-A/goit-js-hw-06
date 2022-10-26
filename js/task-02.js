const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const firstItem = document.createElement("li");
firstItem.textContent = ingredients[0];
const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1];
const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2];
const fourthIteam = document.createElement("li");
fourthIteam.textContent = ingredients[3];
const fifthIteam = document.createElement("li");
fifthIteam.textContent = ingredients[4];
const sixthIteam = document.createElement("li");
sixthIteam.textContent = ingredients[5]

ingredientsList.append(firstItem, secondItem, thirdItem, fourthIteam, fifthIteam, sixthIteam)

