import CriarHabito from "./controller/criarHabito.controller.js";

const botaoCriaHabito = document.getElementById("botaoCriarHabito");
botaoCriaHabito.addEventListener("click", () => {
  CriarHabito.modalHabito();
});
