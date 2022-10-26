const categories = document.querySelectorAll(".item");

const animals = categories[0];
const animalsHeader = animals.querySelector("h2").textContent;
const animalsElementsList = animals.querySelector("ul").children.length;

const products = categories[1];
const productsHeader = products.querySelector("h2").textContent;
const productsElementsList = products.querySelector("ul").children.length;

const technologies = categories[2];
const technologiesHeader = technologies.querySelector("h2").textContent;
const technologiesElementsList =
  technologies.querySelector("ul").children.length;

console.log("Number of categories:", categories.length);
console.log("Category: ", animalsHeader);
console.log("Elements: ", animalsElementsList);
console.log("Category: ", productsHeader);
console.log("Elements: ", productsElementsList);
console.log("Category: ", technologiesHeader);
console.log("Elements: ", technologiesElementsList);
