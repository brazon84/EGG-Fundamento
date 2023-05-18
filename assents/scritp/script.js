/*const saludar = document.getElementById("title");
const hola = "Bienvenidos a mi primer Website!";
saludar.innerHTML = hola;
document.body.appendChild(saludar);
*/
function showAlert() {
  swal("¡hola, esta es una alerta desde JavaScript");
}

document.getElementById("title").innerHTML = "Bienvenidos a mi primer Website!";

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

//se crea la funcion sumi
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    swal("Por favor ingrese un correo electrónico válido.");
  } else {
    swal({
      title: "Correo electrónico enviado correctamente.",
      icon: "success",
    });
  }
}
