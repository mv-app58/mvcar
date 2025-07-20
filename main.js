document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "mv-app58" && password === "123456") {
        // Login bem-sucedido - redireciona para a galeria (ou outra página)
        window.location.href = "home.html"; // ou "galeria.html", conforme preferir
      } else {
        alert("Usuário ou senha inválidos!");
      }
    });
  }
});
