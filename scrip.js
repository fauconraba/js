document.addEventListener("DOMContentLoaded", () => {
  const bgButton = document.getElementById("bg-button");
  const resetButton = document.getElementById("resetButton");
  const form = document.getElementById("textForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const phoneInput = document.getElementById("phoneInput");
  const formResult = document.getElementById("formResult");
  const list = document.getElementById("list");
  const hoverDiv = document.getElementById("hoverDiv");

  bgButton.addEventListener("click", () => {
    document.body.style.backgroundColor =
      `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name && email && password && phone) {
      const userData = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
      formResult.textContent = `Submitted: ${userData}`;
      addUserToList(email);
      form.reset();
    } else {
      formResult.textContent = "Please fill in all fields!";
      formResult.style.color = "red";
    }
  });

  const addUserToList = (email) => {
    const listItem = document.createElement("li");
    const emailSpan = document.createElement("span");
    const removeButton = document.createElement("button");

    emailSpan.textContent = email;
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    listItem.appendChild(emailSpan);
    listItem.appendChild(removeButton);
    list.appendChild(listItem);
  };

  resetButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f0f0f5";
    formResult.textContent = "";
    list.innerHTML = "";
  });

  hoverDiv.addEventListener("mouseover", () => {
    hoverDiv.textContent = "HOVERD";
  });

  hoverDiv.addEventListener("mouseout", () => {
    hoverDiv.textContent = "Hover over me!";
  });

  list.querySelectorAll("li button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const listItem = event.target.parentElement;
      list.removeChild(listItem);
    });
  });

  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "green";
    }
  });

  phoneInput.addEventListener("input", () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.style.borderColor = "red";
    } else {
      phoneInput.style.borderColor = "green";
    }
  });
});
