const smia = document.getElementById("bg-button");

smia.addEventListener("click", () => {
  document.body.style.background = `#${Math.floor(
    Math.random() * 256 * 256 * 256
  ).toString(16)}`;
});
const form = document.getElementById("textForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = document.getElementbyId("nameInput").value.trim();
  const email = document.getElementbyId("emailInput").value.trim();
  const passwrd = document.getElementbyId("passwordInput").value.trim();
  const phone = document.getElementbyId("phoneInput").value.trim();

  if (!nom || !email || !passwrd || !phone) {
    cosalert("invalid");
    return;
  }

  // validateForm();
});
function validateForm() {}
function add(email) {
  //regex 'required'
  const n = /^[a-zA-Z0-9./%_]+@emsi\.ma$/;
}
