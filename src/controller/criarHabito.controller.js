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

    static criaHabito(){
        const form = document.getElementById("criaForm")
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const habitos = this.criaDadosFormulario()
            await RequisicoesHabitos.criarHabito(habitos)
            location.href = "./paginaPrincipal.views.html"
        })
         
    }
}
