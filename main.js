
const app = document.getElementById("app");

app.innerHTML = `
  <div style="max-width: 400px; margin: 50px auto; padding: 20px;">
    <h1 style="text-align:center;color:#e11d48;">MV CAR</h1>
    <input id="user" placeholder="Usuário" style="width:100%;margin-bottom:10px;padding:10px;" />
    <input id="pass" type="password" placeholder="Senha" style="width:100%;margin-bottom:10px;padding:10px;" />
    <button onclick="login()" style="width:100%;padding:10px;background:#e11d48;color:#fff;border:none;">Entrar</button>
    <div id="erro" style="color:red;margin-top:10px;text-align:center;"></div>
  </div>
`;

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  if (u === "mv-app58" && p === "Choisie58") {
    loadApp();
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha incorretos.";
  }
}

function loadApp() {
  app.innerHTML = `
    <div style="padding:20px;">
      <h2 style="color:#e11d48;">Olá, mv-app58 👋</h2>
      <button onclick="goTo('galeria')">Galeria de Serviços</button>
      <button onclick="goTo('historico')">Histórico de Atendimentos</button>
      <button onclick="goTo('agendamento')">Agendamento Online</button>
      <div id="content" style="margin-top:20px;"></div>
    </div>
  `;
}

function goTo(page) {
  const content = document.getElementById("content");
  if (page === "galeria") {
    content.innerHTML = `
      <h3>Galeria de Serviços</h3>
      <img src="https://via.placeholder.com/300x200?text=Motor" style="width:100%;margin-bottom:10px;" />
      <img src="https://via.placeholder.com/300x200?text=Suspensão" style="width:100%;margin-bottom:10px;" />
      <img src="https://via.placeholder.com/300x200?text=Funilaria" style="width:100%;" />
    `;
  } else if (page === "historico") {
    content.innerHTML = `
      <h3>Histórico de Atendimentos</h3>
      <input placeholder="Digite o CPF ou nome" style="width:100%;padding:10px;margin-bottom:10px;" />
      <button style="width:100%;padding:10px;background:#e11d48;color:#fff;border:none;">Consultar</button>
      <p style="margin-top:10px;">(Exemplo de histórico aqui...)</p>
    `;
  } else if (page === "agendamento") {
    content.innerHTML = `
      <h3>Agendamento</h3>
      <input id="nome" placeholder="Seu nome" style="width:100%;padding:10px;margin-bottom:10px;" />
      <input id="data" placeholder="Data desejada" style="width:100%;padding:10px;margin-bottom:10px;" />
      <input id="servico" placeholder="Serviço" style="width:100%;padding:10px;margin-bottom:10px;" />
      <button onclick="enviarAgendamento()" style="width:100%;padding:10px;background:#e11d48;color:#fff;border:none;">Enviar via WhatsApp</button>
    `;
  }
}

function enviarAgendamento() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const servico = document.getElementById("servico").value;
  const mensagem = \`Olá, meu nome é \${nome}. Gostaria de agendar um serviço: \${servico} na data \${data}.\`;
  const url = \`https://wa.me/5511970624600?text=\${encodeURIComponent(mensagem)}\`;
  window.open(url, "_blank");
}
