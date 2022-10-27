let counterValue = document.querySelector("#value");

const btnPlus = document.querySelector("#counter").lastElementChild;
const btnMinus = document.querySelector("#counter").firstElementChild;

let count = 1

btnPlus.addEventListener("click", () => {
  count +=1;
  counterValue.innerHTML = count;
 });

btnMinus.addEventListener("click",  () => {
    count -=1;
    counterValue.innerHTML = count;
});