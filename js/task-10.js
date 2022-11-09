function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector("#controls");
const input = controls.children[0];
input.value = 0;
const buttonCreate = controls.children[1];
// console.log(buttonCreate)
const buttonDestroy = controls.children[2];
// console.log(buttonDestroy)
const divBoxes = document.querySelector("#boxes");
// console.log(divBoxes);
const body = document.querySelector("body");

buttonCreate.addEventListener("click", () => {
  for (let i = 0; i < input.value; ++i) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.border = "solid 1px black";
    divBoxes.append(box);
  }
  return (input.value = 0);
});
buttonDestroy.addEventListener("click", () => {
  const boxesList = document.querySelector("#boxes").children;
  for (let i = 0; i <= boxesList.length; +i) {
    const boxes = boxesList[i];
    boxes.remove();
    console.log(boxes);
  }
});
