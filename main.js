window.onload = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div style="max-width: 400px; margin: 50px auto; padding: 20px;">
      <h1 style="text-align:center;color:#e1d48;">🔧 MV CAR</h1>
      <input id="user" placeholder="Usuário" style="width:100%;margin-bottom:10px;padding:10px;" />
      <input id="pass" type="password" placeholder="Senha" style="width:100%;margin-bottom:10px;padding:10px;" />
      <button onclick="login()" style="width:100%;padding:10px;background:#e1d48;color:#fff;border:none;">Entrar</button>
      <div id="erro" style="color:red;margin-top:10px;text-align:center;"></div>
    </div>
  `;

  window.login = () => {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "mv-app58" && p === "Choisie58") {
      loadApp();
    } else {
      document.getElementById("erro").innerText = "Usuário ou senha incorretos.";
    }
  };

  function loadApp() {
    app.innerHTML = `
      <div style="padding:20px;">
        <h2 style="color:#e1d48;">🛠️ Olá, mv-app58 👋</h2>
        <button onclick="goTo('galeria')">📸 Galeria de Serviços</button>
        <button onclick="goTo('historico')">📑 Histórico de Atendimentos</button>
        <button onclick="goTo('agendamento')">📅 Agendamento Online</button>
        <div id="content" style="margin-top:20px;"></div>
      </div>
    `;
  }

  window.goTo = (page) => {
    const content = document.getElementById("content");

    if (page === "galeria") {
      content.innerHTML = `
        <h3>Galeria de Serviços</h3>
        <img src="https://via.placeholder.com/300x200?text=Motor" style="width:100%;margin-bottom:10px;" />
        <img src="https://via.placeholder.com/300x200?text=Suspensão" style="width:100%;" />
      `;
    }

    if (page === "historico") {
      content.innerHTML = `
        <h3>Histórico</h3>
        <ul>
          <li>Troca de óleo - 12/07/2025</li>
          <li>Revisão - 01/07/2025</li>
        </ul>
      `;
    }

    if (page === "agendamento") {
      content.innerHTML = `
        <h3>Agendamento</h3>
        <p>Entre em contato via <a href="https://wa.me/55SEUNUMERO" target="_blank">WhatsApp</a>.</p>
      `;
    }
  };
};
