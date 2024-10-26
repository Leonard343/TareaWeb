const user = "Cliente1";
const pass = "password";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === user && password === pass) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
