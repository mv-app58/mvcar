function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "mv-app58" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
