function validatePassword() {
    const correctPassword = "12345"; // Cambia esto por la clave real
    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        window.location.href = "index.html"; // Redirige a la página principal
    } else {
        errorMessage.style.display = "block";
    }
}
