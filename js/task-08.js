const inputEmail = document.querySelectorAll("input")[0];
const inputPassword = document.querySelectorAll("input")[1];
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  }

  let inputData = { email: email.value, password: password.value };
  console.log(inputData);

  event.currentTarget.reset();
});
