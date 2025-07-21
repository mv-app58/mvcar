document.addEventListener("DOMContentLoaded", function () {
  const loginPage = document.getElementById("app");

  if (loginPage && window.location.pathname.includes("index.html")) {
    loginPage.innerHTML = `
      <div style="text-align: center;">
        <img src="img/Gemini_Generated_Image_hmbtawhmbtawhmbt.png" alt="Mecânico trabalhando" style="width: 300px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="color: white;">Login MV CAR</h1>
        <input type="text" id="username" placeholder="Usuário" style="padding: 10px; width: 250px; margin-bottom: 10px;"><br>
        <input type="password" id="password" placeholder="Senha" style="padding: 10px; width: 250px;"><br>
        <button onclick="login()" style="padding: 10px 20px; margin-top: 10px; background-color: red; color: white; border: none; border-radius: 5px;">Entrar</button>
      </div>
    `;
  }
});

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Login simples
  if (username === "mv-app58" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
