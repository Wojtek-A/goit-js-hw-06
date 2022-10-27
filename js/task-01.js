const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const elementList = item.querySelector("ul").children.length;
  console.log(`${header}: ${elementList}`);
});
