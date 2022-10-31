const controller = document.querySelector("input");
let text = document.querySelector("span");

const textSizeHandler = () => {
  const controllerValue = controller.valueAsNumber;
  text.style.fontSize = `${controllerValue}px`;
  //   console.log(inputLength);
};

controller.addEventListener("input", textSizeHandler);
