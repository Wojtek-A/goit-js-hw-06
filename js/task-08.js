const inputEmail = document.querySelectorAll("input")[0];
const inputPassword = document.querySelectorAll("input")[1];
const form = document.querySelector(".login-form");

inputEmail.addEventListener("blur", () => {
  const inputLength = inputEmail.value.length;
  if (inputLength === 0) {
    alert("Wypełnij pole Email");
  }
});

inputPassword.addEventListener("blur", () => {
  const inputLength = inputPassword.value.length;
  if (inputLength === 0) {
    alert("Wypełnij pole Password");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
