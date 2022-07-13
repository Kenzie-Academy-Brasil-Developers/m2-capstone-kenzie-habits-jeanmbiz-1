import RequisicoesHabitos from "./habitos.controller.js"


export default class CriarHabito {

    static criaDadosFormulario(){
        const titulo = document.getElementById("titulo")
        const descricao = document.getElementById("descricao")
        const categoria = document.getElementById("categoria")

        return {  
        "habit_title": titulo.value,
        "habit_description": descricao.value,
        "habit_category": categoria.value
        }
    }

    static async criaHabito(){
        const habitos = this.criaDadosFormulario()
        await RequisicoesHabitos.criarHabito(habitos) 
    }
}


//import efetuarLogin from "./controller/login.controller.js";
//import CriarHabito from "./controller/criarHabito.controller.js";
//console.log("ola")

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