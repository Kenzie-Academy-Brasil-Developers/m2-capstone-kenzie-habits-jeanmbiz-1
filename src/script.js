
//import efetuarLogin from "./controller/login.controller.js";
import CriarHabito from "./controller/criarHabito.controller.js";
console.log("ola")

const form = document.getElementById("criaForm")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("ola")
    CriarHabito.criaHabito()
})

/*const fecharModal     = document.getElementById("p")
fecharModal.innerHTML = `<a href="#">X</a>`
fecharModal.href      = "./paginaPrincipal"
fecharModal.addEventListener("click", (event) => {
    fecharModal.style.display = "none"
})*/

const botaoCriarHabito = document.getElementById("botaoCriarHabito")
botaoCriarHabito.addEventListener("click", () => {
    window.location.href = "./criarHabito.views.html"
})