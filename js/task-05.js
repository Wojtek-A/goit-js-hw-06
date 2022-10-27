const nameInput = document.querySelector("#name-input");

const handlernameInput = (event) => {
  const preview = document.querySelector("#name-output");
  const nameTemplate = event.target.value;
  preview.textContent = nameTemplate;
};

nameInput.addEventListener("input", handlernameInput);
