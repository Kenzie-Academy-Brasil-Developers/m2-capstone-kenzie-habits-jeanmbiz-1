import CriarHabito from "./controller/criarHabito.controller.js";

const botaoCriaHabito = document.getElementById("botaoCriarHabito")
botaoCriaHabito.addEventListener("click", (event) => {
    CriarHabito.modalHabito()
})