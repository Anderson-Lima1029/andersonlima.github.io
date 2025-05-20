// Criação das variáveis que referenciam elementos da página
const outrasTecnologias = document.querySelector("#outras-tec");
const botaoVerMais = document.querySelector(".ver-mais");
const botaoEnviar = document.querySelector(".enviar");

// Evento de clique que mostra mais tecnologias na tela
botaoVerMais.addEventListener("click", () => {
  outrasTecnologias.style.display = "flex";
});

// Evento de clique que envia uma mensagem de sucesso
botaoEnviar.addEventListener("click", () => {
  alert("Mensagem enviada com sucesso!");
});
