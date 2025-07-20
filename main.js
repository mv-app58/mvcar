document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div style="max-width: 400px; width: 100%; background: rgba(0,0,0,0.8); padding: 20px; border-radius: 16px;">
      <img src="./img/Gemini_Generated_Image_hmbtawhmbtawhmbt.png" alt="Mecânico" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
      <h2 style="text-align:center;color:white;">Login MV CAR</h2>
      <input type="text" placeholder="Usuário" style="width: 100%; padding: 10px; margin-bottom: 10px; border: none; border-radius: 8px;">
      <input type="password" placeholder="Senha" style="width: 100%; padding: 10px; margin-bottom: 20px; border: none; border-radius: 8px;">
      <button style="width: 100%; padding: 12px; background: red; color: white; border: none; border-radius: 8px; font-weight: bold;">
        Entrar
      </button>
    </div>
  `;
});
